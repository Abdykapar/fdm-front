import { navbarService } from '../_services/navbar.service'

const state = {
	sidebars: []
}

const actions = {
	setSidebars ({ commit }, data) {
		commit('SET_SIDEBARS', data)
	},
	fetchSidebars ({ commit, dispatch }, role) {
		navbarService.getAll(role).then(res => {
			commit('SET_SIDEBARS', res)
		}).catch(err => {
			console.log(err)
			dispatch('alert/setAlert', { message: err, type: 'e' }, { root: true })
		})
	}
}

const mutations = {
	SET_SIDEBARS (state, data) {
		state.sidebars = data
	}
}

const getters = {
	sidebars ({ sidebars }) {
		return sidebars
	}
}

export const sidebars = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}