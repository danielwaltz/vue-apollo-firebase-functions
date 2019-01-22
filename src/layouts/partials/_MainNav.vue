<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'photos' }">Photos</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;
  pointer-events: none;
}

.nav a {
  margin-left: 10px;
  padding: 2px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 20px;
  font-weight: 700;
  pointer-events: all;
  text-decoration: none;
}

.nav a:first-child {
  margin-left: 0;
}

.nav a:hover,
.nav .router-link-exact-active {
  text-decoration: underline;
}
</style>
