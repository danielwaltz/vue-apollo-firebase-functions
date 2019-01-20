<template>
  <div class="about">
    <HelloWorld :message="$route.name" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'About',
  components: {
    HelloWorld,
  },
};
</script>
