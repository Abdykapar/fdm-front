<template>
	<div class="sidebar" :class="{ small: type === 'small' }">
		<div class="sidebar__top">
			<div v-if="type === 'big'" class="sidebar__logo">
				<span>FlightData</span>
				<span class="sidebar__circle"></span>
			</div>
			<div class="sidebar__space" v-else></div>
			<div class="sidebar__menu">
				<div
					v-for="item in menus"
					:key="item.href"
					class="sidebar__menu__item"
					:class="{
						small: type === 'small',
						active: item.href === $route.path,
					}"
					@click="$router.push(item.href)"
				>
					<img :src="item.icon" alt="" />
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
			>
				<img :src="item.icon" alt="" /> {{ type === 'big' ? item.title : '' }}
			</div>
		</div>
	</div>
</template>

<script>
	import sidebars from '@/_helpers/sidebars';
	export default {
		name: 'Sidebar',
		data() {
			return {
				// menus: [
				// 	{
				// 		title: 'Dashboard',
				// 		icon: require('../assets/icons/bar-chart.svg'),
				// 		href: '/',
				// 	},
				// 	{
				// 		title: 'Data List',
				// 		icon: require('../assets/icons/folder.svg'),
				// 		href: '/data-list',
				// 	},
				// 	{
				// 		title: 'Data Insights',
				// 		icon: require('../assets/icons/monitor.svg'),
				// 	},
				// 	{
				// 		title: 'Technician Users',
				// 		icon: require('../assets/icons/user.svg'),
				// 		href: '/technician',
				// 	},
				// ],
				menus: sidebars.superAdminSidebars,
				bottomMenus: sidebars.bottomMenus,
			};
		},
		computed: {
			type() {
				return this.$route.path === '/' ? 'small' : 'big';
			},
		},
	};
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

		&__menu {
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

				img {
					padding-right: 20px;
				}

				&.active {
					background: rgba($color: #ffffff, $alpha: 0.1);
				}
			}
		}
	}
</style>
