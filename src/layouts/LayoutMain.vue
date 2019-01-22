<template>
  <div class="layout layout-main">
    <MainNav />
    <slot />
  </div>
</template>

<script>
import MainNav from '@/layouts/partials/_MainNav';

export default {
  name: 'LayoutMain',
  components: {
    MainNav,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1dbbe2;
}
</style>
