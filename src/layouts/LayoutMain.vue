<template>
  <div class="layout-main">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'photos' }">Photos</router-link>
    </nav>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutMain',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  padding: 10px;
}
</style>
