import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { MdCard, MdButton, MdRipple } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdRipple);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
