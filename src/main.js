import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import {
  MdCard,
  MdToolbar,
  MdBottomBar,
  MdMenu,
  MdButton,
  MdList,
  MdIcon
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdCard);
Vue.use(MdToolbar);
Vue.use(MdBottomBar);
Vue.use(MdMenu);
Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
