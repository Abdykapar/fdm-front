<template>
	<div>
		<loader v-if="loader"></loader>
		<router-view />
	</div>
</template>
<script>
	import Loader from "./components/Loader";
	export default {
		components: {Loader},
		computed: {
			loader () {
				return this.$store.getters["loader/loading"]
			}
		}
	}
</script>

<style lang="scss"></style>
