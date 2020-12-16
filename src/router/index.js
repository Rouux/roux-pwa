import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Feature from '../views/Feature.vue';
import { isAuthentified } from '../services/auth-service';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      public: true
    },
    component: Login,
    beforeEnter: (_, from, next) => {
      isAuthentified().then(isLoggedIn => {
        if (isLoggedIn) next(from.path);
        else next();
      });
    }
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

router.beforeEach(async (to, _, next) => {
  if (to.meta.public || (await isAuthentified())) {
    next();
  } else {
    next({ name: 'Login', query: { source: to.path } });
  }
});

export default router;
