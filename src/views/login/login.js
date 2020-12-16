import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength, and } from 'vuelidate/lib/validators';
import { bus } from '@/main';
import { EVENTS } from '@/utils/const';
import { login } from '@/services/auth-service';

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
        length: and(minLength(3), maxLength(32))
      },
      password: {
        required,
        length: and(minLength(3), maxLength(32))
      }
    }
  },
  mounted: function() {
    bus.$emit(EVENTS.CHANGE_NAV_HEADER, 'Login');
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
