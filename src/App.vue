<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/wallpapers">Wallpapers</router-link>
    </nav>
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

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  font-weight: bold;
  color: #42b983;
}

a.router-link-exact-active {
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  padding: 10px;
}
</style>
