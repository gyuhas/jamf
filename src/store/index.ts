import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentComp: 'CardSimple',
  },
  mutations: {
    setCurrentComp(state, payload) {
      state.currentComp = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
