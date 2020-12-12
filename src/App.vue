<template>
  <div id="app-background">
    <div id="app">
      <nav-bar />
      <div class="spacer">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import 'style';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  padding-bottom: 0.1em;
}

#app-background {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: $background-color;
  background-size: 100vw;
}
</style>
