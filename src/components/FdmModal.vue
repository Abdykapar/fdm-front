<template>
	<div class="modal flex-center" id="modal">
		<div class="modal__content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modal',
		data() {
			return {
				modal: '',
			};
		},
		mounted() {
			this.modal = document.getElementById('modal');
			this.modal.addEventListener('click', this.onOutsideClick);
		},
		beforeDestroy() {
			this.modal.removeEventListener('click', this.onOutsideClick);
		},
		methods: {
			onOutsideClick(e) {
				if (e.target === this.modal) {
					this.$emit('close');
				}
			},
		},
	};
</script>

<style lang="scss">
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba($color: #7f7d96, $alpha: 0.5);

		&__content {
			background: #1f2327;
			box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
			border-radius: 2px;
			padding: 48px 30px 66px;
		}
	}
</style>
