import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    offline: false,
    loading: false
  },
  mutations: {
    changeWebStatus (state, status) {
      state.offline = status
      return state
    },
    changeLoading (state, status) {
      state.loading = status
    }
  }
})

export default store
