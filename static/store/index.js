import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const state = {
  activityDetail: {},
};
const mutations = {
  /**
   * 活动页面跳转活动详情
   * @param {str} state 
   * @return {str} data 
   */
  activityDetail(state, data) {
    state.activityDetail = data;
  },
};
export default new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState()],
});
