import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    offline: false
  },
  mutations: {
    changeWebStatus (state, status) {
      state.offline = status;
      return state;
    }
  }
});

export default store;
