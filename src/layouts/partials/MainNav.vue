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
  padding-bottom: 5%;
  pointer-events: none;
  background: linear-gradient(
    hsl(0, 0%, 0%) 0%,
    hsla(0, 0%, 0%, 0.738) 19%,
    hsla(0, 0%, 0%, 0.541) 34%,
    hsla(0, 0%, 0%, 0.382) 47%,
    hsla(0, 0%, 0%, 0.278) 56.5%,
    hsla(0, 0%, 0%, 0.194) 65%,
    hsla(0, 0%, 0%, 0.126) 73%,
    hsla(0, 0%, 0%, 0.075) 80.2%,
    hsla(0, 0%, 0%, 0.042) 86.1%,
    hsla(0, 0%, 0%, 0.021) 91%,
    hsla(0, 0%, 0%, 0.008) 95.2%,
    hsla(0, 0%, 0%, 0.002) 98.2%,
    hsla(0, 0%, 0%, 0) 100%
  );
}

.nav a {
  margin-left: 10px;
  padding: 2px;
  color: rgba(255, 255, 255, 0.6);
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
  color: rgba(255, 255, 255, 1);
}
</style>
