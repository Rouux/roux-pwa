<template>
  <div id="app-background">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 0.1em;
}
#app-background {
  background-image: url('./assets/background-space.jpg') !important;
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-size: 100vw;
}
</style>
