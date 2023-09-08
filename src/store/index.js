import Vue from "vue"
import Vuex from 'vuex'
import account from './modules/account'

Vue.use(Vuex)
// console.log(Vuex)
const store = new Vuex.Store({
  modules: {
    account
  }
})
//
export default store