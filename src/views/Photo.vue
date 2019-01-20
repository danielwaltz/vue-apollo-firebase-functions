<template>
  <div class="photo">
    <h1>{{ photo.title }}</h1>
    <router-link
      v-if="$apollo.queries.photo.loading || photo.id"
      :to="{ name: 'photos' }"
    >
      <img :src="photo.url" :alt="photo.author" />
    </router-link>
    <div v-else>
      <span>Photo missing.</span>
      {{ ` ` }}
      <router-link :to="{ name: 'photos' }">Go back</router-link>
    </div>
  </div>
</template>

<script>
import PHOTO from '@/graphql/Photo.gql';

export default {
  name: 'Photo',
  data() {
    return {
      photo: {},
    };
  },
  apollo: {
    photo: {
      query: PHOTO,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>

<style scoped>
.photo img {
  display: block;
  width: 100%;
}
</style>
