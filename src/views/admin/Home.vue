<template>
	<div class="main">
		<header />
		<div class="main__left">
			<div class="main__top">
				<div class="main__left__event">
					<div class="main__left__event__title">
						Events by Flight Phase
					</div>
					<div class="main__left__event__chart">
						<polar-area />
					</div>
				</div>
				<div class="main__left__speedometer">
					<div>
						<div class="speedometer__item">
							<div class="speedometer__flight flex-center">
								<div class="speedometer__content">
									<div class="speedometer__date">
										Per Month
									</div>
									<div class="speedometer__count">
										1246
									</div>
									<div class="speedometer__title">
										Flights
									</div>
								</div>
								<speedometer />
								<canvas
									id="arc"
									class="arc"
									width="150"
									height="150"
								/>
							</div>
						</div>
						<div class="speedometer__item">
							<div class="speedometer__flight flex-center">
								<div class="speedometer__content">
									<div class="speedometer__date">
										Per 100 Flts
									</div>
									<div class="speedometer__count">
										350
									</div>
									<div class="speedometer__title">
										Events
									</div>
								</div>
								<speedometer />
								<canvas
									id="per_event"
									class="arc event"
									width="150"
									height="150"
								/>
							</div>
						</div>
					</div>
					<div>
						<div class="speedometer__item">
							<div class="speedometer__flight flex-center">
								<div class="speedometer__content">
									<div class="speedometer__date">
										Per Month
									</div>
									<div class="speedometer__count">
										3234
									</div>
									<div class="speedometer__title">
										Events
									</div>
								</div>
								<speedometer color="#E73030" />
								<canvas
									id="event"
									class="arc event"
									width="150"
									height="150"
								/>
							</div>
						</div>
						<div class="speedometer__item">
							<div class="speedometer__flight flex-center">
								<div class="speedometer__content">
									<div class="speedometer__date">
										Per Flight
									</div>
									<div class="speedometer__count">
										380
									</div>
									<div class="speedometer__title">
										Events
									</div>
									<!--									<div class="speedometer__sub-title">-->
									<!--										Per Aircraft tp-->
									<!--									</div>-->
								</div>
								<speedometer />
								<canvas
									id="per_aircraft"
									class="arc event"
									width="150"
									height="150"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="main__left__aircraft">
					<img
						:src="selectedAircraft.mainImage"
						alt=""
					>
				</div>
			</div>
			<div class="main__bottom">
				<div class="main__left__trigger">
					<div class="trigger__title">
						Top Triggers
					</div>
					<div class="trigger__content">
						<dashboard-bar />
					</div>
				</div>
				<div class="main__left__event-flight">
					<div class="event-flight__title">
						Event & Flight Count
					</div>
					<div class="event-flight__content">
						<dashboard-line />
					</div>
				</div>
			</div>
		</div>
		<div class="main__right">
			<div
				v-for="item in aircrafts"
				:key="item.id"
				class="aircraft"
			>
				<div class="aircraft__title">
					{{ item.title }}
				</div>				
				<div
					class="aircraft__img"
					@click="onAircraft(item)"
				>
					<component
						:is="item.component"
						:active="selectedAircraft.id === item.id"
					/>
				</div>				
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../../components/Header'
import Speedometer from '../../components/Speedometer'
import AircraftOne from '../../components/AircraftOne'
import AircraftTwo from '../../components/AircraftTwo'
import AircraftThree from '../../components/AircraftThree'
import AircraftFour from '../../components/AircraftFour'
import PolarArea from '../../components/charts/PolarArea'
import DashboardBar from '../../components/charts/DashboardBar'
import DashboardLine from '../../components/charts/DashboardLine'
export default {
	components: { DashboardLine, DashboardBar, PolarArea, AircraftFour, AircraftThree, AircraftTwo, AircraftOne, Speedometer, Header },
	data () {
		return {
			aircrafts: [
				{
					title: 'All Aircrafts',
					component: 'AircraftOne',
					id: 1,
					mainImage: require('../../assets/img/aircraft.png')
				},
				{
					title: 'Boeing 230',
					component: 'AircraftTwo',
					id: 2,
					mainImage: require('../../assets/img/aircraft-2.svg')
				},
				{
					title: 'Boeing 220',
					component: 'AircraftThree',
					id: 3,
					mainImage: require('../../assets/img/aircraft-3.svg')
				},
				{
					title: 'Boeing A2',
					component: 'AircraftFour',
					id: 4,
					mainImage: require('../../assets/img/aircraft-4.svg')
				}
			],
			selectedAircraft: {}
		}
	},
	mounted () {
		this.draw('#arc','#FFD630', Math.PI)
		this.draw('#per_event','#298BFE', 1.2 * Math.PI)
		this.draw('#event','#E73030', 0.8 * Math.PI)
		this.draw('#per_aircraft','#66C8D4', 0.95 * Math.PI)
		this.selectedAircraft = this.aircrafts[0]
	},
	methods: {
		draw (doc, color, angle) {
			const canvas = document.querySelector(doc)
			const ctx = canvas.getContext('2d')

			ctx.strokeStyle = color
			ctx.lineWidth = 4
			ctx.beginPath()
			ctx.arc(100, 75, 62, 0.72 * Math.PI, angle, false)
			ctx.stroke()
			ctx.beginPath()
		},
		onAircraft (item) {
			this.selectedAircraft = item
		}
	}
}
</script>

<style lang="scss" scoped>
	.main {
		display: flex;
		margin-left: 36px;
		justify-content: space-between;
		color: #ffffff;
		padding-bottom: 20px;

		&__left {
			&__event {
				font-size: 18px;
				line-height: 180%;
				background: rgba(255, 255, 255, 0.02);
				border-radius: 8.40864px;
				&__chart {
					min-width: 300px;
				}

				&__title {
					padding: 22px 0 0 20px;
				}
			}

			&__speedometer {
				display: flex;
				gap: 20px;

				> div {
					.speedometer__item {
						background: rgba(255, 255, 255, 0.02);
						border-radius: 8.40864px;
						padding: 20px 10px;

						&:last-child {
							margin-top: 37px;
						}
					}
				}
			}

			&__aircraft {
				position: relative;

				img {
					position: absolute;
					top: -80px;
					left: -80px;
					pointer-events: none;
				}
			}

			&__trigger {
				width: 380px;
				background: rgba(255, 255, 255, 0.02);
				border-radius: 8.40864px;
				padding: 10px;
			}

			&__event-flight {
				width: 50vw;
				padding: 10px 0;
				background: rgba(255, 255, 255, 0.02);
				border-radius: 3.97619px;
			}
		}

		&__top {
			display: flex;
			gap: 20px;
		}

		&__bottom {
			margin-top: 20px;
			display: flex;
			gap: 20px;
		}

		&__right {
			background: rgba(255, 255, 255, 0.02);
			border-radius: 8.41px;
			width: 120px;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			overflow-y: auto;
		}
	}

	.speedometer {
		&__flight {
			position: relative;
			.arc {
				position: absolute;
				top: -11px;
				left: -36px;
			}
		}

		&__date {
			font-size: 12px;
			line-height: 100%;
			margin-top: 10px;
		}

		&__title {
			font-size: 18px;
			line-height: 100%;
		}

		&__count {
			font-size: 27px;
			line-height: 100%;
			margin: 10px 0;
		}

		&__content {
			position: absolute;
			text-align: center;
		}

		&__sub-title {
			margin-bottom: -15px;
			padding-top: 12px;
			font-size: 11px;
		}
	}

	.aircraft {
		//margin: 20px 0;

		&__item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		&__img {
			text-align: center;
			cursor: pointer;
		}

		&__title {
			margin-bottom: 15px;
		}
	}

	.trigger {
		&__title {
			padding-top: 10px;
		}
	}

	.event-flight {
		&__title {
			padding-left: 15px;
			padding-top: 10px;
			margin-bottom: -20px;
		}
	}
</style>
