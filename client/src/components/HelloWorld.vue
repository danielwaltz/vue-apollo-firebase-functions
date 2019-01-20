<template>
  <div class="hello-world">
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>
import HELLO from '@/graphql/Hello.gql';

export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  apollo: {
    hello: {
      query: HELLO,
      variables() {
        return {
          message: this.message,
        };
      },
    },
  },
};
</script>
