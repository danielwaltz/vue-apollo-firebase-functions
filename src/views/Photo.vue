<template>
  <div class="photo">
    <h1>{{ photo.title || 'Photo' }}</h1>

    <router-link v-if="photo.id" :to="{ name: 'photos' }">
      <img :src="photo.url" :alt="photo.author" />
    </router-link>

    <div v-else-if="$apollo.queries.photo.loading">Loading...</div>

    <div v-else>
      <span>No photo found.</span>
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
      update(data) {
        return data.photo || {};
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
