<template>
  <LayoutMain class="home">
    <div class="container">
      <h1 v-if="helloWorld">{{ helloWorld }}</h1>

      <h1 v-else-if="$apollo.queries.helloWorld.loading">Loading...</h1>

      <h1 v-else>No connection.</h1>

      <input
        v-model.trim="message"
        class="field"
        type="text"
        placeholder="Type something..."
      />

      <Loader :class="{ loading: $apollo.queries.helloWorld.loading }" />
    </div>
  </LayoutMain>
</template>

<script>
import LayoutMain from '@/layouts/LayoutMain';
import Loader from '@/components/Loader';
import HELLO_WORLD from '@/graphql/HelloWorld.graphql';

export default {
  name: 'Home',
  components: {
    LayoutMain,
    Loader,
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
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
}

.container h1 {
  margin: 0;
  padding: 2vw;
  max-width: 100%;
  font-size: 12vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-shadow: 0 0 1vw rgba(0, 0, 0, 0.3);
}

.field {
  flex: 1;
  position: relative;
  padding: 3vw;
  border: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.87);
  color: rgba(255, 255, 255, 0.87);
  font-size: 5vw;
  text-align: center;
  appearance: none;
  outline: 0;
  box-shadow: 0 0 3vw rgba(0, 0, 0, 0.6);
}

.loader {
  margin-top: 2vw;
  font-size: 1vw;
  transition: opacity 0.5s ease-out;
  opacity: 0;
}

.loader.loading {
  opacity: 1;
}
</style>
