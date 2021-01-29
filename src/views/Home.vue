<template>
	<div class="home">
		<sidebar></sidebar>
		<div class="home__main">
			<home-header></home-header>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar';
	import HomeHeader from '@/components/Header';
	export default {
		name: 'Home',
		components: {
			Sidebar,
			HomeHeader,
		},
		data() {
			return {};
		},
		mounted() {},
		methods: {},
	};
</script>
<style lang="scss">
	.home {
		display: flex;
		background: $black-back;

		&__main {
			flex: 1;
		}
	}
</style>
