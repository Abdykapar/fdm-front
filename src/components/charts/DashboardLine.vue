<template>
	<vue-apex-charts
		v-if="isShow"
		type="line"
		height="350"
		:options="chartOptions"
		:series="series"
	/>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { otherService } from '../../_services/other.service'
export default {
	name: 'DashboardLine',
	components: { VueApexCharts },
	data () {
		return {
			isShow: false,
			series: [ {
				name: 'Events',
				data: [ 10, 41, 35, 51, 49, 62, 69, 91, 148 ]
			},
			{
				name: 'Flights',
				data: [ 7, 42, 31, 20, 11, 32, 44, 12, 20 ]
			} ],
			chartOptions: {
				chart: {
					height: 350,
					type: 'line',
					zoom: {
						enabled: false
					},
					toolbar: {
						show: false
					},
					background: 'inherit',
				},
				colors: [ '#1CD1A1', '#DE5753' ],
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'straight',
					colors: [ '#1CD1A1', '#DE5753' ],
					width: 1,
				},
				legend: {
					position: 'top',
					horizontalAlign: 'right',
					itemMargin: {
						horizontal: 10,
						vertical: 0
					},
				},
				markers: {
					size: 3,
					colors: [ '#1CD1A1', '#DE5753' ],
					strokeColors: [ '#1CD1A1', '#DE5753' ],
					strokeWidth: 2,
					strokeOpacity: 0.9,
					strokeDashArray: 0,
					fillOpacity: 1,
					discrete: [],
					shape: 'circle',
					radius: 2,
					offsetX: 0,
					offsetY: 0,
					onClick: undefined,
					onDblClick: undefined,
					showNullDataPoints: true,
					hover: {
						size: undefined,
						sizeOffset: 3
					}
				},
				grid: {
					borderColor: '#33393F',
					strokeDashArray: 0,
					position: 'back',
					row: {
						colors: [ '#22262A' ], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
				xaxis: {
					categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ]
				},
				theme: {
					mode: 'dark',
					palette: 'palette1'
				}
			},
		}
	},
	mounted () {
		this.fetchData()
	},
	methods: {
		fetchData () {
			otherService.flightsByMonth().then(res => {
				this.chartOptions.xaxis.categories = res.map(i => i.month)
				this.series[0].data = res.map(i => i.events)
				this.series[1].data = res.map(i => i.flights)
				this.isShow = true
			}).catch(err => {
				console.log(err)
				this.$toastr.e(err)
			})
		}
	}
}
</script>

<style scoped>

</style>