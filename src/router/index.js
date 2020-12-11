import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Feature from '../views/Feature.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feature/:name',
    component: Feature
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
