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
			<div
				class="header__right__profile"
			>
				<div
					v-if="isShowProfile"
					id="overflow"
					class="overflow"
				/>
				<div
					class="pointer flex-align-center header__right__profile__content"
					:class="{ 'up' : isShowProfile }"
					@click="isShowProfile = !isShowProfile"
				>
					<img
						src="../assets/img/img.png"
						alt=""
					>
					<span class="header__right__name">{{ userProfile.user.first_name }} {{ userProfile.user.last_name }}</span>
					<img
						src="../assets/icons/chevron-down.svg"
						alt=""
					>
				</div>

				<div
					v-if="isShowProfile"
					class="profile"
				>
					<div
						class="profile__item"
						:style="`background-image: url(${require('../assets/icons/profile.svg')})`"
					>
						My Profile
					</div>
					<div
						class="profile__item"
						:style="`background-image: url(${require('../assets/icons/password.svg')})`"
					>
						Password
					</div>
					<div
						class="profile__item"
						:style="`background-image: url(${require('../assets/icons/alert-2.svg')})`"
					>
						Alerts
					</div>
				</div>
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
			isNotif: false,
			isShowProfile: false
		}
	},
	computed: {
		isTechnician () {
			return this.$route.path === '/technician'
		},
		userProfile () {
			return this.$store.state.account.user
		}
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
				this.isShowProfile = false
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
				position: relative;

				&__content {
					position: relative;
					z-index: 1;

					&.up {
						z-index: 2;
					}
				}
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

	.profile {
		position: absolute;
		right: 0;
		top: 62px;
		width: 320px;
		padding: 25px 0;
		background: #1F2327;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
		border-radius: 2px;
		z-index: 3;

		&__item {
			height: 66px;
			font-size: 20px;
			font-weight: 400;
			line-height: 24px;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			background-repeat: no-repeat;
			background-position: left 32px center;
			cursor: pointer;

			&:hover {
				background-color: rgba(#FFFFFF, 0.2);
			}
		}
	}
</style>
