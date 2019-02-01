import Vue from 'vue'
import Vuex from 'vuex'
import UserInfo from './user-info'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserInfo
  }
})
