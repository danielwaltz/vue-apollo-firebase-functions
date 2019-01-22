<template>
  <div class="photos">
    <h1>Photos</h1>

    <template v-if="hasPhotos">
      <div class="grid">
        <router-link
          v-for="photo in pagedPhotos"
          :key="photo.id"
          :to="{ name: 'photo', params: { id: photo.id } }"
          class="photo"
        >
          <img :src="photo.url" :alt="photo.author" />
        </router-link>
      </div>
      <button @click="showMore">Show More</button>
    </template>

    <div v-else>No photos found.</div>
  </div>
</template>

<script>
import PHOTOS from '@/graphql/Photos.gql';

export default {
  name: 'Photos',
  data() {
    return {
      photos: [],
      limit: 20,
    };
  },
  computed: {
    hasPhotos() {
      return this.photos.length > 0;
    },
    pagedPhotos() {
      return this.photos.slice(0, this.limit);
    },
  },
  methods: {
    showMore() {
      this.limit = this.limit + 20;
    },
  },
  apollo: {
    photos: {
      query: PHOTOS,
      update(data) {
        return data.photos || [];
      },
    },
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.photo {
  width: 20%;
}

.photo img {
  display: block;
}

button {
  margin: 20px;
  font-size: 26px;
}
</style>
