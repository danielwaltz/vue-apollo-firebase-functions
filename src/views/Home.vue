<template>
  <LayoutMain class="home">
    <h1 v-if="helloWorld">{{ helloWorld }}</h1>

    <h1 v-else-if="$apollo.queries.helloWorld.loading">Loading...</h1>

    <h1 v-else>No connection.</h1>

    <input v-model="message" type="text" placeholder="Dynamic" />
  </LayoutMain>
</template>

<script>
import LayoutMain from '@/layouts/LayoutMain';
import HELLO_WORLD from '@/graphql/HelloWorld.gql';

export default {
  name: 'Home',
  components: {
    LayoutMain,
  },
  data() {
    return {
      message: '',
    };
  },
  apollo: {
    helloWorld: {
      query: HELLO_WORLD,
      variables() {
        return {
          message: this.message,
        };
      },
    },
  },
};
</script>

<style scoped>
input {
  padding: 5px;
  font-size: 20px;
}
</style>
