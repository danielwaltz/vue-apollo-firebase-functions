<template>
  <div class="hello-world">
    {{ hello }}
  </div>
</template>

<script>
import hello from '@/graphql/Hello.gql';

export default {
  name: 'HelloWorld',
  apollo: {
    hello: {
      query: hello,
    },
  },
};
</script>
