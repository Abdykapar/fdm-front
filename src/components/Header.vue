<template>
	<div class="header">
		<div class="header__left" />
		<div
			v-if="isTechnician"
			class="header__center"
		>
			<img
				src="../assets/icons/search.svg"
				alt=""
			>
			<input
				type="text"
				placeholder="Search here"
			>
		</div>
		<div class="header__right">
			<div
				v-if="isNotif"
				id="overflow"
				class="overflow"
			/>
			<div
				class="header__right__alert"
				@click="onShowAlert"
			>
				<img
					class="pointer alert"
					src="../assets/icons/alert.svg"
					alt=""
				>
				<svg
					class="alert"
					width="6"
					height="6"
					viewBox="0 0 6 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="3"
						cy="3"
						r="3"
						fill="#FA5F1C"
					/>
				</svg>
				<div
					v-if="isNotif"
					class="alert__content"
				>
					<notifications />
				</div>
			</div>
			<div class="header__right__profile flex-align-center">
				<img
					src="../assets/img/img.png"
					alt=""
				>
				<span class="header__right__name">Begimay Maslinova</span>
				<img
					src="../assets/icons/chevron-down.svg"
					alt=""
				>
			</div>
		</div>
	</div>
</template>

<script>
import Notifications from './Notifications'
export default {
	name: 'Header',
	components: { Notifications },
	data () {
		return {
			isNotif: false
		}
	},
	computed: {
		isTechnician () {
			return this.$route.path === '/technician'
		},
	},
	mounted () {
		document.addEventListener('click', this.onOutsideClick)
	},
	beforeDestroy () {
		document.removeEventListener('click', this.onOutsideClick)
	},
	methods: {
		onShowAlert () {
			this.isNotif = !this.isNotif
		},
		onOutsideClick (e) {
			const overflow = document.getElementById('overflow')
			if (e.target === overflow) {
				this.isNotif = false
			}
		},
	}
}
</script>

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100px;

		&__center {
			position: relative;
			input {
				border: 0.5px solid #888e9a;
				width: 400px;
				height: 39px;
				background: $black-back;
				padding-left: 42px;
				font-weight: 400;
				font-size: 14px;
				line-height: 19px;
				color: #7882a2;
				outline-color: #888e9a;
			}

			img {
				position: absolute;
				left: 16px;
				top: 9px;
			}
		}

		&__right {
			display: flex;
			align-items: center;

			&__alert {
				margin-right: 42px;
				cursor: pointer;
				position: relative;
				z-index: 2;

				.alert {
					position: absolute;
					top: -2px;
					right: 3px;
				}
			}

			&__profile {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				letter-spacing: 0.02em;
				color: #ffffff;
				margin-right: 40px;
			}

			&__name {
				padding: 0 13px 0 16px;
			}
		}
	}
	.alert {
		position: relative;

		&__content {
			position: absolute;
			top: 31px;
			right: 0;
			z-index: 12;
		}
	}

	.overflow {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(#7F7D96, 0.6);
		z-index: 1;
	}
</style>
