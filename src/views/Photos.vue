<template>
  <LayoutMain class="photos">
    <template v-if="hasPhotos">
      <div class="grid">
        <router-link
          v-for="photo in pagedPhotos"
          :key="photo.id"
          :to="{ name: 'photo', params: { id: photo.id } }"
          class="photo"
        >
          <img :src="photo.url" :alt="photo.author" class="image" />
        </router-link>
      </div>

      <button class="more" @click="showMore">Show More</button>
    </template>

    <div v-else-if="$apollo.queries.photos.loading">Loading...</div>

    <div v-else>No photos found.</div>
  </LayoutMain>
</template>

<script>
import LayoutMain from '@/layouts/LayoutMain';
import PHOTOS from '@/graphql/Photos.gql';

export default {
  name: 'Photos',
  components: {
    LayoutMain,
  },
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

.image {
  display: block;
}

.more {
  margin: 20px;
  font-size: 26px;
}
</style>
