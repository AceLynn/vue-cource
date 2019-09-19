import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import user from './modules/user'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  // 不设置或者设置false，不开启严格模式；否则开启
  // strict: true,

  // 开发环境开启严格模式，知道哪里出错；生产模式屏蔽错误提示
  strict: process.env.NODE_ENV === 'development',
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    user
  },
  plugins: [
    saveInLocal
  ]
})
