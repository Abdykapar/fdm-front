const state = {
	selectedFileId: ''
}

const actions = {
	setFileId ({ commit }, id) {
		commit('SET_FILE_ID', id)
	}
}

const mutations = {
	SET_FILE_ID (state, id) {
		state.selectedFileId = id
	}
}

const getters = {
	selectedFile ({ selectedFileId }) {
		return selectedFileId
	}
}

export const file = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}
