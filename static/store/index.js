import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const state = {
  liveList: '',
};
const mutations = {
  /**
   * 跳转直播页面data
   * @param {str} state 
   * @return {str} data 
   */
  liveList(state, data) {
    state.liveList = data;
  },
};
export default new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState()],
});
