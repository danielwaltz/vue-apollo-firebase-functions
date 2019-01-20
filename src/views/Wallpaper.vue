<template>
  <div class="wallpaper">
    <router-link
      v-if="$apollo.queries.wallpaper.loading || wallpaper.id"
      :to="{ name: 'wallpapers' }"
    >
      <img :src="wallpaper.url" :alt="wallpaper.name" />
    </router-link>
    <div v-else>
      <span>Wallpaper missing.</span>
      {{ ` ` }}
      <router-link :to="{ name: 'wallpapers' }">Go back</router-link>
    </div>
  </div>
</template>

<script>
import WALLPAPER from '@/graphql/Wallpaper.gql';

export default {
  name: 'Wallpapers',
  data() {
    return {
      wallpaper: {},
    };
  },
  apollo: {
    wallpaper: {
      query: WALLPAPER,
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
.wallpaper img {
  display: block;
}
</style>
