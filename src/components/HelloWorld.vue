<template>
  <div class="hello-world">
    <h1>{{ helloWorld }}</h1>
  </div>
</template>

<script>
import HELLO_WORLD from '@/graphql/HelloWorld.gql';

export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      default: '',
    },
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
