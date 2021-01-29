<template>
	<div class="home">
		<sidebar></sidebar>
		<div class="home__main">
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
	};
</script>

<style lang="scss">
	.home {
		display: flex;
		background: $black-back;

		&__main {
			flex: 1;
			margin-left: 240px;
		}
	}
</style>
