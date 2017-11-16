import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Global state
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token) // call mutation
    },
    setUser ({commit}, user) {
      commit('setUser', user) // call mutation
    }
  }
})
