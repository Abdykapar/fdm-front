<template>
	<div class="home">
		<sidebar></sidebar>
		<div class="home__main" :class="{ small: isAdmin }">
			<admin-header></admin-header>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import AdminHeader from '../Header.vue';
	import Sidebar from '../Sidebar.vue';
	export default {
		components: { Sidebar, AdminHeader },
		computed: {
			isAdmin() {
				return this.$route.path === '/';
			},
		},
	};
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
