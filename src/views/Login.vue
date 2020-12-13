<template>
  <!--    <div>
     <form :action="login()" method="post">
       <div>
         <label>Username:</label>
         <input type="text" name="username" />
       </div>
       <div>
         <label>Password:</label>
         <input type="password" name="password" />
       </div>
       <div>
         <input type="submit" value="Log In" />
       </div>
     </form>
   </div> 
   -->
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('username')">
                <label for="username">Username</label>
                <md-input
                  name="username"
                  id="username"
                  v-model="form.username"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.username.required"
                  >The username is required</span
                >
                <span
                  class="md-error"
                  v-else-if="
                    !$v.form.username.minlength || !$v.form.username.maxlength
                  "
                  >Invalid first name</span
                >
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="password">Last Name</label>
                <md-input
                  name="password"
                  id="password"
                  v-model="form.password"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.password.required"
                  >The password is required</span
                >
                <span
                  class="md-error"
                  v-else-if="
                    !$v.form.password.minlength || !$v.form.password.maxLength
                  "
                  >Invalid password</span
                >
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Login</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
    <md-snackbar :md-active.sync="unauthorized">Credentials WRONG</md-snackbar>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { bus } from '../main';
import { events } from '../utils/const';
import { login } from '../services/auth-service';

export default {
  name: 'Login',
  mixins: [validationMixin],
  data: function() {
    return {
      form: {
        username: null,
        password: null
      },
      userSaved: false,
      sending: false,
      unauthorized: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(32)
      },
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(32)
      }
    }
  },
  mounted: function() {
    bus.$emit(events.CHANGE_NAV_HEADER, 'Login');
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.username = null;
      this.form.password = null;
    },
    saveUser() {
      this.sending = true;
      const { username, password } = this.form;

      login(username, password).then(response => {
        this.clearForm();
        this.sending = false;
        if (response.status === 401) {
          this.unauthorized = true;
        } else {
          const { source } = this.$route.query;
          this.$router.push(source ? source : '/');
        }
      });
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) this.saveUser();
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
