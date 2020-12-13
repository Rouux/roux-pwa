import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import {
  MdCard,
  MdToolbar,
  MdMenu,
  MdButton,
  MdList,
  MdIcon,
  MdField,
  MdContent,
  MdSnackbar,
  MdProgress
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);
Vue.use(MdCard);
Vue.use(MdToolbar);
Vue.use(MdMenu);
Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdField);
Vue.use(MdContent);
Vue.use(MdSnackbar);
Vue.use(MdProgress);

Vue.$cookies.config('7d');
Vue.config.productionTip = false;
export const bus = new Vue();

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
