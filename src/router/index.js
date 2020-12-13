import Vue from 'vue';
import VueRouter from 'vue-router';
import { bus } from '../main';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Feature from '../views/Feature.vue';
import axios from 'axios';
import { IS_AUTHENTIFIED_ENDPOINT } from '../utils/endpoints';
import { USER_SESSION_COOKIE } from '../utils/const';

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

async function isAuthentified() {
  const cookie = bus.$cookies.get(USER_SESSION_COOKIE);
  return await axios
    .get(IS_AUTHENTIFIED_ENDPOINT, {
      headers: {
        'Set-Cookie': `${USER_SESSION_COOKIE}=${cookie}`
      }
    })
    .then(() => true)
    .catch(() => false);
}

router.beforeEach(async (to, _, next) => {
  if (to.meta.public || (await isAuthentified())) {
    next();
  } else {
    next({ name: 'Login', query: { source: to.path } });
  }
});

export default router;
