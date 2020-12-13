import Vue from 'vue';
import Vuex from 'vuex';
import CoinsRepository from '../repositories/CoinsRepository';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coin: null,
    availableCoins: [
      { name: 'bitcoin' },
      { name: 'chainlink' },
      { name: 'ripple' },
      { name: 'litecoin' },
      { name: 'dogecoin' },
      { name: 'eos' },
    ],
  },

  mutations: {
    getCoinById(state, payload) {
      state.coin = payload;
    },
  },

  actions: {
    async getCoinById({ commit }, payload) {
      const coin = await CoinsRepository.getCoinById(payload);

      commit('getCoinById', coin);
    },
  },
});
