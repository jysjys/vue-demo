import Vue from "vue";
import Vuex from "vuex";
// import vuexAlong from 'vue-along'
// import createPersistedState from "vuex-persistedstate"
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({

    storage: window.localStorage

})
// import {stat} from 'fs';
// import vuexAlong from  'vuex-along';
Vue.use(Vuex);

const state = {
  key: "", // 太保接口token
  
};

const mutations = {
  
};

const actions = {
 
};

const getters = {
  // addEmagePartCount: state => {
  //    return state.demagePartCount;
  // }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // plugins: [vuexAlong],
  plugins: [vuexLocal.plugin]
  // plugins: [createPersistedState()]


});
// vuexAlong.onlySession(true);
