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
      path: '/wallpapers',
      name: 'wallpapers',
      component: () =>
        import(/* webpackChunkName: "wallpapers" */ './views/Wallpapers.vue'),
    },
    {
      path: '/wallpapers/:id',
      name: 'wallpaper',
      component: () =>
        import(/* webpackChunkName: "wallpapers" */ './views/Wallpaper.vue'),
    },
  ],
});
