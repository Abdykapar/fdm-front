import {userService} from '@/_services/user.service'
import router from '@/_router'

const roles = [
	{
		code: 'ROLE_SUPER_ADMIN',
		href: '/super-admin'
	}
]

const user = JSON.parse(localStorage.getItem('user'))
const rememberedUser = JSON.parse(localStorage.getItem('remembered'))

const state = {
	user: user ? user : {},
	remembered: rememberedUser || {}
}

const actions = {
	login({commit, dispatch}, data) {
		userService.login(data).then(res => {
			localStorage.setItem('user', JSON.stringify(res));
			commit('SET_USER', res);
			router.push('/super-admin');
		}).catch(err => console.log(err));
	},
	logout({commit}) {
		userService.logout();
		commit('REMOVE_USER');
	},
	remembering ({ commit }, data) {
		localStorage.setItem('remembered', JSON.stringify(data))
		commit('REMEMBER_USER', data)
	},
	removeRemember ({ commit }) {
		localStorage.removeItem('remembered')
		commit('REMEMBER_USER', {})
	}
}

const mutations = {
	SET_USER(state, data) {
		state.user = data;
	},
	REMOVE_USER(state) {
		state.user = null;
	},
	REMEMBER_USER (state, data) {
		state.remembered = data
	}
}

const getters = {
	remembered ({ remembered }) {
		return remembered
	}
}

export const account = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}
