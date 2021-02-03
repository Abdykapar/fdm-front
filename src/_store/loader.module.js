const state = {
	loading: false
}

const actions = {
	setLoading ({ commit }, value) {
		commit('SET_LOADER', value)
	}
}

const mutations = {
	SET_LOADER (state, value) {
		state.loading = value
	}
}

const getters = {
	loading ({ loading }) {
		return loading
	}
}

export const loader = {
	namespaced: true,
	actions,
	state,
	mutations,
	getters
}