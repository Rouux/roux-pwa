<template>
  <div id="app-background">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

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
  /* background-image: url('./assets/background-space.jpg') !important; */
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: $background-color;
  background-size: 100vw;
}
</style>
