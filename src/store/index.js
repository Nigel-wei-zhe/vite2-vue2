import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const options = {
  state: {
    count: 999,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
}

const store = new Store(options)

export default store
