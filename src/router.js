import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/photos',
      name: 'photos',
      component: () =>
        import(/* webpackChunkName: "photos" */ './views/Photos.vue'),
    },
    {
      path: '/photos/:id',
      name: 'photo',
      component: () =>
        import(/* webpackChunkName: "photos" */ './views/Photo.vue'),
    },
  ],
});
