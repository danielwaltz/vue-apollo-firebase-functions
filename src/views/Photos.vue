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

    <Loader v-else-if="$apollo.queries.photos.loading" />

    <div v-else>No photos found.</div>
  </LayoutMain>
</template>

<script>
import LayoutMain from '@/layouts/LayoutMain';
import Loader from '@/components/Loader';
import PHOTOS from '@/graphql/Photos.graphql';

export default {
  name: 'Photos',
  components: {
    LayoutMain,
    Loader,
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
      this.limit += 20;
    },
  },
  apollo: {
    photos: {
      query: PHOTOS,
      update: data => data.photos || [],
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  border: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 26px;
  appearance: none;
  cursor: pointer;
}
</style>
