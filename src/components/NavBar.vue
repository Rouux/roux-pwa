<template>
  <div class="unselectable space">
    <md-toolbar class="nav-bar" md-elevation="1">
      <md-button class="md-icon-button nav-home" to="/">
        <md-icon class="md-size-1x icon">home</md-icon>
      </md-button>

      <div class="nav-title">
        <h3 id="nav-title" class="md-title">{{ header }}</h3>
      </div>

      <md-menu
        md-direction="bottom-end"
        class="nav-menu"
        :mdCloseOnClick="true"
      >
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon class="md-size-1x icon">menu</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item v-if="isLoggedIn">Profile</md-menu-item>
          <md-menu-item v-if="isLoggedIn">Settings</md-menu-item>
          <md-menu-item @click="logout" v-if="isLoggedIn">Logout</md-menu-item>
          <md-menu-item @click="login" v-if="!isLoggedIn">Login</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
  </div>
</template>

<script>
import { bus } from '../main';
import { EVENTS } from '../utils/const';
import * as auth from '../services/auth-service';
import { isAuthentified } from '../services/auth-service';
export const DEFAULT_TITLE = 'Welcome !';

export default {
  name: 'NavBar',
  data: function() {
    return {
      items: ['#001', '#002', '#003'],
      header: String(DEFAULT_TITLE),
      isLoggedIn: Boolean(false)
    };
  },
  created: function() {
    isAuthentified().then(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    bus.$on(EVENTS.USER_AUTH, isLoggedIn => {
      console.log('on USER_AUTH', isLoggedIn);
      this.isLoggedIn = isLoggedIn;
    });
    bus.$on(EVENTS.CHANGE_NAV_HEADER, header => {
      this.header = header;
    });
  },
  methods: {
    logout() {
      auth.logout().then(() => {
        this.$router.push({ name: 'Login' });
      });
    },
    login() {
      if (this.$route.name !== 'Login') {
        this.$router.push({ name: 'Login' });
      }
    }
  }
};
</script>

<style lang="scss">
@import '../style';

$header-color: rgb(28, 28, 28);

.nav-bar {
  position: fixed !important;
  background-color: $header-color !important;

  .nav-title {
    flex: 1;
    .md-title {
      color: $color !important;
    }
  }

  .icon {
    color: $color !important;
  }

  .nav-home {
    position: fixed;
  }

  .nav-menu {
    background-color: $header-color !important;
    position: fixed;
    right: 0.5em;
  }
}

.md-list {
  padding: 0 !important;
  background-color: $background-color !important;
  .md-list-item-content {
    color: $color !important;
  }
}
</style>
