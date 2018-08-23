import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
import '@/assets/styles/reset';
import '@/utils/rem.js';

import '@/request/http';
import Api from '@/request/api';

Vue.prototype.$Api = Api;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
