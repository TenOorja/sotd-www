import Vuex from 'vuex'
import axios from '~/helpers/axios'
import announcementsModule from './modules/announcements'
import dappsModule from './modules/dapps'
import newsletterModule from './modules/newsletter'
import tagsModule from './modules/tags'

const actions = {
  nuxtServerInit ({ commit }) {
    return axios
      .get('stats')
      .then(response => {
        commit('SET_DAPP_COUNT', response.data.dappCount)
      })
  }
}

const getters = {
  statDappCount: state => {
    return state.stats.dappCount
  }
}

const mutations = {
  SET_DAPP_COUNT (state, value) {
    state.stats.dappCount = value
  }
}

const state = {
  stats: {
    dappCount: 0
  }
}

const createStore = () => {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      announcements: announcementsModule,
      dapps: dappsModule,
      newsletter: newsletterModule,
      tags: tagsModule
    },
    mutations,
    state
  })
}

export default createStore
