<template>
	<div
		class="sidebar"
		:class="{ small: type === 'small' }"
	>
		<div class="sidebar__top">
			<div
				v-if="type === 'big'"
				class="sidebar__logo"
			>
				<span>FlightData</span>
				<span class="sidebar__circle" />
			</div>
			<div
				v-else
				class="sidebar__space"
			/>
			<div class="sidebar__menu">
				<div
					v-for="item in menus"
					:key="item.href"
					class="sidebar__menu__item"
					:class="{
						small: type === 'small',
						active: item.href === $route.path,
					}"
					@click="onRoute(item.href)"
				>
					<i
						v-if="item.icon"
						:class="item.icon"
					/>
					<img
						v-else
						:src="folderIcon"
						alt=""
					>
					{{ type === 'big' ? item.title : '' }}
				</div>
			</div>
		</div>
		<div class="sidebar__bottom">
			<div
				v-for="item in bottomMenus"
				:key="item.icon"
				class="sidebar__menu__item"
				:class="{ small: type === 'small' }"
				@click="onRoute(item.href)"
			>
				<img
					:src="item.icon"
					alt=""
				> {{ type === 'big' ? item.title : '' }}
			</div>
		</div>
	</div>
</template>

<script>
import sidebars from '@/_helpers/sidebars'
export default {
	name: 'Sidebar',
	data () {
		return {
			menus: [],
			bottomMenus: sidebars.bottomMenus,
			folderIcon: require('../assets/icons/folder.svg'),
		}
	},
	computed: {
		type () {
			return this.$route.path === '/dashboard' ? 'small' : 'big'
		},
		sidebars () {
			return this.$store.getters['sidebars/sidebars']
		},
		userProfile () {
			return this.$store.state.account.user
		}
	},
	watch: {
		sidebars () {
			if (this.userProfile.user.is_staff) {
				this.menus = sidebars.superAdminSidebars
			} else this.menus = this.sidebars
		}
	},
	mounted () {
		if (this.userProfile.user.is_staff) {
			this.menus = sidebars.superAdminSidebars
		} else this.menus = this.sidebars
	},
	methods: {
		onRoute (href) {
			if (href !== this.$route.path) this.$router.push(href)
		}
	}
}
</script>

<style lang="scss">
	.sidebar {
		width: 240px;
		background: #22262a;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		animation: width 2s ease;
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 5px;
		}
		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}
		&::-webkit-scrollbar-thumb {
			background: #7882A2;
			opacity: 0.7;
			border-radius: 9.54286px;
		}

		&.small {
			width: 81px;
		}

		&__space {
			margin-top: 92px;
		}

		&__bottom {
			margin-bottom: 30px;
		}

		&__logo {
			font-weight: 400;
			font-size: 24px;
			line-height: 28px;
			color: #ffffff;
			padding-top: 23px;
			padding-bottom: 56px;
			text-align: center;
		}

		&__circle {
			background: linear-gradient(225deg, #fa2b56 0%, #f91c3d 100%);
			width: 10px;
			height: 10px;
			display: inline-block;
			border-radius: 50%;
			margin-left: 4px;
		}

		&__top {
			display: flex;
			flex-direction: column;
		}

		&__menu {
			flex: 1;
			overflow-y: auto;
			&__item {
				display: flex;
				align-items: center;
				font-weight: 400;
				font-size: 15px;
				line-height: 20px;
				letter-spacing: 0.02em;
				color: #ffffff;
				padding: 15px 0 15px 43px;
				cursor: pointer;

				&.small {
					padding-left: 27px;
				}

				&:hover {
					background: rgba($color: #ffffff, $alpha: 0.05);
				}

				img, i {
					padding-right: 20px;
				}

				&.active {
					background: rgba($color: #ffffff, $alpha: 0.1);
				}
			}
		}
	}
</style>
