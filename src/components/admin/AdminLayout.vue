<template>
	<div class="home">
		<sidebar />
		<div
			class="home__main"
			:class="{ small: isAdmin }"
		>
			<admin-header />
			<router-view />
		</div>
	</div>
</template>

<script>
import AdminHeader from '../Header.vue'
import Sidebar from '../Sidebar.vue'
import { mapActions } from 'vuex'
export default {
	components: { Sidebar, AdminHeader },
	computed: {
		isAdmin () {
			return this.$route.path === '/dashboard'
		},
		userProfile () {
			return this.$store.state.account.user
		},
		sidebars () {
			return this.$store.getters['sidebars/sidebars']
		}
	},
	mounted () {
		if (!this.sidebars.length) {
			this.fetchSidebars(this.userProfile.user.role[0])
		}
	},
	methods: {
		...mapActions('sidebars', [ 'fetchSidebars' ])
	}
}
</script>

<style lang="scss">
	.home {
		display: flex;
		background: $black-back;
		min-height: 100vh;

		&__main {
			flex: 1;
			margin-left: 240px;

			&.small {
				margin-left: 81px;
			}
		}
	}
</style>
