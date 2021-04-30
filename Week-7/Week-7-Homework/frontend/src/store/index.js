import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    tweets: []
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_TWEETS(state, data) {
      state.tweets = data
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchTweets({ commit }) {
      const result = await axios.get('http://localhost:3000/tweet/all/json')
      commit('SET_TWEETS', result.data)
    }
  },
  modules: {}
})
