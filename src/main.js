import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.use(Vant)
import '@/assets/styles'
import '@/utils/rem.js'
// import VConsole from 'vconsole'

// new VConsole()

import '@/request/axiosConfig'
import Api from '@/api'
import BaseIcon from '@/components/icon'

Vue.component('base-icon', BaseIcon)

Vue.prototype.$api = Api

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
