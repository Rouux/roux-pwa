<template>
  <div>
    <md-bottom-bar
      md-sync-route
      class="bottom-bar"
      md-type="shift"
      :md-theme="'bar-red'"
    >
      <md-bottom-bar-item
        to="/"
        md-label="Home"
        md-icon="home"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        to="/"
        md-label="Posts"
        md-icon="add"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        to="/"
        md-label="Favorites"
        md-icon="favorite"
      ></md-bottom-bar-item>
    </md-bottom-bar>
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
@import '~vue-material/dist/theme/engine';

@include md-register-theme(
  'bar-red',
  (
    primary: md-get-palette-color(red, A200)
  )
);

@import '~vue-material/dist/theme/all';
</style>

<style lang="scss" scoped>
@import '../style';

.bottom-bar {
  left: 0;
  bottom: 0;
  z-index: 100;
  position: fixed;
  width: 100vw;
}
</style>
