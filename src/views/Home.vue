<template>
  <div class="home">
    <HelloWorld :message="message || $route.name" />
    <input v-model="message" type="text" placeholder="Dynamic" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: '',
    };
  },
};
</script>

<style scoped>
input {
  padding: 5px;
  font-size: 20px;
}
</style>
