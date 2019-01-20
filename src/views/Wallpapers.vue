<template>
  <div class="wallpapers">
    <h1>Wallpapers</h1>
    <div class="grid">
      <router-link
        v-for="wallpaper in wallpapers"
        :key="wallpaper.id"
        :to="{ name: 'wallpaper', params: { id: wallpaper.id } }"
        class="wallpaper"
      >
        <img :src="wallpaper.url" :alt="wallpaper.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import WALLPAPERS from '@/graphql/Wallpapers.gql';

export default {
  name: 'Wallpapers',
  data() {
    return {
      wallpapers: [],
    };
  },
  apollo: {
    wallpapers: {
      query: WALLPAPERS,
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

.wallpaper {
  width: 50%;
}

.wallpaper img {
  display: block;
}
</style>
