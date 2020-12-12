<template>
  <div class="unselectable">
    <md-toolbar class="md-accent nav-bar" md-elevation="1">
      <md-icon @click.native="onClickHeader" class="md-size-1x">home</md-icon>

      <h3 class="md-title" style="flex: 1">Nav Bar Title</h3>

      <md-menu md-direction="bottom-end" :mdCloseOnClick="true">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon class="md-size-1x">menu</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: String
  },
  methods: {
    onClickHeader() {
      const HOME_PATH = '/';
      if (this.$router.currentRoute.path !== HOME_PATH) {
        this.$router.push({ path: HOME_PATH });
      }
    }
  }
};
</script>

<style lang="scss">
@import '../style';

.nav-bar {
  // margin-bottom: 1em;
  position: fixed !important;
}

.md-title {
  color: $color;
}
</style>
