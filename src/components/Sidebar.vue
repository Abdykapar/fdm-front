<template>
	<div class="sidebar">
		<div class="sidebar__top">
			<div class="sidebar__logo">
				<span>FlightData</span>
				<span class="sidebar__circle"></span>
			</div>
			<div class="sidebar__menu">
				<div class="sidebar__menu__item">
					<img src="../assets/icons/bar-chart.svg" alt="" /> Dashboard
				</div>
				<div class="sidebar__menu__item">
					<img src="../assets/icons/folder.svg" alt="" /> Data List
				</div>
				<div class="sidebar__menu__item">
					<img src="../assets/icons/monitor.svg" alt="" /> Data Insights
				</div>
				<div class="sidebar__menu__item active">
					<img src="../assets/icons/user.svg" alt="" /> Technician Users
				</div>
			</div>
		</div>
		<div class="sidebar__bottom">
			<div class="sidebar__menu__item">
				<img src="../assets/icons/settings.svg" alt="" /> Settings
			</div>
			<div class="sidebar__menu__item">
				<img src="../assets/icons/help.svg" alt="" /> Help
			</div>
			<div class="sidebar__menu__item">
				<img src="../assets/icons/logout.svg" alt="" /> Logout
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Sidebar',
	};
</script>

<style lang="scss">
	.sidebar {
		width: 240px;
		background: #22262a;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;

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
