<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
.app,
.layout {
  min-height: 100vh;
}

html {
  background-color: #000;
}

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: rgba(255, 255, 255, 0.87);
  color: rgba(0, 0, 0, 0.87);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  transition: all 0.1s ease-out;
}
</style>
