
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles/reset'
import '@/utils/rem.js'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
