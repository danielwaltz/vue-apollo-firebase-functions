<template>
  <LayoutMain class="photo">
    <div v-if="photo.id" class="frame">
      <span class="title">{{ photo.title || 'Photo' }}</span>
      <img :src="photo.url" :alt="photo.author" />
      <router-link :to="{ name: 'photos' }" class="close">Close</router-link>
    </div>

    <Loader v-else-if="$apollo.queries.photo.loading" />

    <div v-else>
      <span>No photo found.</span>
      {{ ` ` }}
      <router-link :to="{ name: 'photos' }">Go back</router-link>
    </div>
  </LayoutMain>
</template>

<script>
import LayoutMain from '@/layouts/LayoutMain';
import Loader from '@/components/Loader';
import PHOTO from '@/graphql/Photo.graphql';

export default {
  name: 'Photo',
  components: {
    LayoutMain,
    Loader,
  },
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
      update: data => data.photo || {},
    },
  },
};
</script>

<style scoped>
.frame {
  position: relative;
}

.title {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 3em;
  height: 3em;
  text-indent: -9999px;
}

.close:before,
.close:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -0.4em;
  width: 0.6em;
  background-color: #000;
}

.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.photo img {
  display: block;
  width: 100%;
  box-shadow: 0 0 3vw rgba(0, 0, 0, 0.6);
}
</style>
