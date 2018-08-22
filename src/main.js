
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
import '@/assets/styles/reset'
import '@/utils/rem.js'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
