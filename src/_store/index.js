import Vue from 'vue'
import Vuex from 'vuex'
import {account} from '@/_store/account.module'
import { loader } from "./loader.module";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    account,
    loader
  }
})
