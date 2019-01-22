<template>
  <div class="layout layout-main">
    <MainNav />
    <slot />
  </div>
</template>

<script>
import MainNav from '@/layouts/partials/MainNav';
export default {
  name: 'LayoutMain',
  components: {
    MainNav,
  },
};
</script>

<style scoped>
.layout {
  background-color: #1dbbe2;
}
</style>
