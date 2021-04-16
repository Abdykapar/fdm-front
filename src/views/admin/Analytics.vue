<template>
	<div class="analytics">
		<div class="flex justify-between items-center text-white mx-8">
			<div>
				<h2 class="text-4xl">
					Event Summary
				</h2>
			</div>
			<div class="flex gap-8">
				<div>
					<label for="aircratf">Aircraft Type</label>
					<multiselect
						v-model="value2"	
						:options="typeOptions"
						:select-label="''"
						:deselect-label="''"
						:limit="1"
						class="w-40"
						:multiple="true"
						:close-on-select="false"
					/>
				</div>
				<div>
					<label for="aircratf_reg">Aircraft Registration</label>
					<multiselect
						v-model="reg"
						class="w-40"	
						:options="regOptions"
						:select-label="''"
						:deselect-label="''"
						:limit="1"
						:multiple="true"
						:close-on-select="false"
					/>
				</div>
				<div class="flex gap-4">
					<div class="analytics__select">
						<label for="date">Date</label>
						<multiselect
							v-model="value"	
							:options="dateOptions"
							:select-label="''"
							:deselect-label="''"
							:limit="1"
							:multiple="false"
							:close-on-select="true"
						/>
					</div>
					<div class="">
						<div class="h-6 text-sm">
							<i class="far fa-calendar-alt" />
							15.02.2020 - 15.02.2021
						</div>
						<div class="flex gap-4">
							<input
								type="text"
								class="rounded-md analytics__input"
							>   
							<multiselect
								v-model="date2"	
								:select-label="''"
								:deselect-label="''"
								:options="date2Options"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex gap-5 m-8 text-white">
			<div>
				<div class="flex gap-4">
					<div class="border w-48 h-24 flex flex-col items-center justify-center">
						<p class="text-4xl">
							274
						</p>
						<p class="text-gray-400">
							Flights
						</p>
					</div>
					<div class="border w-48 h-24 flex flex-col items-center justify-center">
						<p class="text-4xl">
							572
						</p>
						<p class="text-gray-400">
							Events
						</p>
					</div>
				</div>
				<div class="mt-5 flex gap-4">
					<div class="border w-40 h-48 flex flex-col items-center justify-center">
						<p class="text-4xl">
							209
						</p>
						<p class="text-gray-400">
							Events per 100 Flts
						</p>
					</div>
					<div class="border w-56 h-48 flex flex-col items-center justify-center">
						<div class="text-gray-400">
							Events by Aircraft Type
						</div>
						<vue-apex-charts
							type="donut"
							:options="pie.chartOptions"
							:series="pie.series"
						/>
					</div>
				</div>
				<div
					class="border mt-5 h-96 flex flex-col items-center justify-center relative chartContainer"
					style="width: 25rem"
				>
					<div class="absolute left-1 top-1 text-sm text-gray-400">
						Watch List
					</div>
					<vue-apex-charts
						type="bar"
						height="100%"
						width="100%"
						:options="column.chartOptions"
						:series="column.series"
					/>
				</div>
			</div>
			<div class="border w-96">
				<div class="mt-5 h-80">
					<vue-apex-charts
						type="pie"
						height="100%"
						width="100%"
						:options="pieCenter.chartOptions"
						:series="pieCenter.series"
					/>
				</div>
				<div class="mt-5 h-80 chartContainer">
					<vue-apex-charts
						type="bar"
						height="100%"
						width="100%"
						:options="columnCenter.chartOptions"
						:series="columnCenter.series"
					/>
				</div>
			</div>
			<div class="flex-1">
				<div class="border h-96">
					<vue-apex-charts
						type="line"
						height="100%"
						width="100%"
						:options="multipleChart.chartOptions"
						:series="multipleChart.series"
					/>
				</div>
				<div class="border h-72 mt-9" />
			</div>
		</div>
	</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
	name: 'Analytics',
	components: { VueApexCharts },
	data () {
		return {
			value: null,
			value1: '',
			value2: '',
			reg: '',
			date: '',
			date2: '',
			typeOptions: [ 'Select all', 'options' ],
			dateOptions: [ 'Next', 'Last', 'This' ],
			regOptions: [ 'Select all', 'registration' ],
			date2Options: [ 'Day', 'Week', 'Month', 'Year' ],
			options: [ 'sdad' ],
			pie: {
				series: [ 44 ],
				chartOptions: {
					chart: {
						type: 'donut',
						foreColor: '#9ca3af'
					},
					// title: {
					// 	text: 'Events by Aircraft Type'
					// },
					labels: [ 'B737-400' ],
					// fill: {
					// 	colors: [ '' ]
					// },
					legend: {
						position: 'bottom'
					},
					dataLabels: {
						enabled: false
					},
					stroke: {
						show: false
					},
					responsive: [ {
						breakpoint: 480,
						options: {
							chart: {
								width: 200
							},
							legend: {
								show: false
							}
						}
					} ]
				},
			},
			column: {
				series: [ {
					name: 'Net Profit',
					data: [ 44, 55, 57, 56, 61, 58 ]
				} ],
				chartOptions: {
					chart: {
						type: 'bar',
						height: 350,
						toolbar: { show: false },
						foreColor: '#fff'
					},
					legend: {
						show: true,
						position: 'right'
					},
					fill: {
						colors: [ '#05B8AA' ]
					},
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: '55%',
							endingShape: 'rounded'
						},
					},
					
					dataLabels: {
						enabled: false
					},stroke: {
						show: true,
						width: 2,
						colors: [ 'transparent' ]
					},
					xaxis: {
						categories: [ 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ],
					},
					yaxis: {
						title: {
							text: 'Event Rate'
						}
					},
					tooltip: {
						colors: [ '#000' ],
						y: {
							formatter: function (val) {
								return '$ ' + val + ' thousands'
							}
						}
					}
				},
			},
			pieCenter: {
				series: [ 44, 55, 13, 43, 22 ],
				chartOptions: {
					chart: {
						width: 380,
						type: 'pie',
					},
					labels: [ 'Team A', 'Team B', 'Team C', 'Team D', 'Team E' ],
					legend: { show: false },
					stroke: {
						colors: [ 'transparent' ] 
					}, 
					dataLabels: {
						enabled: true,
						textAnchor: 'start',
						formatter: function (val, opt) {
							return opt.w.globals.labels[opt.seriesIndex]
						},
						offsetX: 0,
						style: {
							fontSize: '12px',
							fontWeight: 'normal',
							colors: [ '#fff' ],
						},
						background: {
							enabled: false,
							foreColor: '#fff',
							borderRadius: 2,
							padding: 4,
							opacity: 0.9,
							borderWidth: 0,
						},
					},
					responsive: [ {
						breakpoint: 480,
						options: {
							chart: {
								width: 200
							},
							legend: {
								position: 'bottom'
							}
						}
					} ]
				},
			},
			columnCenter: {
				series: [ {
					name: 'PRODUCT A',
					data: [ 44, 55, 41, 67, 22, 43 ]
				}, {
					name: 'PRODUCT B',
					data: [ 13, 23, 20, 8, 13, 27 ]
				}, {
					name: 'PRODUCT C',
					data: [ 11, 17, 15, 15, 21, 14 ]
				} ],
				chartOptions: {
					chart: {
						type: 'bar',
						height: 350,
						stacked: true,
						foreColor: '#fff',  
						toolbar: {
							show: true,
							tools: {
								download: false,
								selection: true,
								zoom: false,
								zoomin: true,
								zoomout: true,
								pan: true,
								reset: true | '<img src="/static/icons/reset.png" width="20">',
								customIcons: []
							},
						},
						zoom: {
							enabled: true
						}
					},
					responsive: [ {
						breakpoint: 480,
						options: {
							// legend: {
							// 	position: 'bottom',
							// 	offsetX: -10,
							// 	offsetY: 0
							// }
						}
					} ],
					dataLabels: {
						enabled: false
					},
					plotOptions: {
						bar: {
							borderRadius: 8,
							horizontal: false,
						},
					},
					xaxis: {
						type: 'datetime',
						categories: [ '01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
							'01/05/2011 GMT', '01/06/2011 GMT'
						],
					},
					legend: {
						position: 'top',
						horizontalAlign: 'left',
						offsetY: 20
					},
					fill: {
						opacity: 1
					}
				},
			},
			multipleChart: {
				series: [ {
					name: 'Website Blog',
					type: 'column',
					data: [ 440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160 ]
				}, {
					name: 'Social Media',
					type: 'line',
					data: [ 23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16 ]
				} ],
				chartOptions: {
					chart: {
						height: 350,
						type: 'line',
						foreColor: '#fff',
					},
					stroke: {
						width: [ 0, 4 ]
					},
					title: {
						text: 'Traffic Sources'
					},
					dataLabels: {
						enabled: false,
						// enabledOnSeries: [ 1 ]
					},
					labels: [ '01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001' ],
					xaxis: {
						type: 'datetime'
					},
					yaxis: [ {
						title: {
							text: 'Website Blog',
						},
            
					}, {
						opposite: true,
						title: {
							text: 'Social Media'
						}
					} ]
				},
          
			}
		}
	}
}
</script>

<style lang="scss">
.chartContainer .apexcharts-tooltip {
  color: #000000;
}

.chartContainer .apexcharts-tooltip .apexcharts-tooltip-series-group.active {
  background: #ffffff !important;
}
    .multiselect__tags {
		background: transparent;
		border-color:rgb(118, 118, 118);
        min-height: 43px;
		input {
			background: transparent;
		}

		.multiselect__single {
			background: transparent;
			color: white;
		}
	}
    .analytics {
        &__select {
            width: 180px;

            &.input {
                width: 80px;
            }
        }
        &__input {
            height: 43px;
            width: 80px;
            background: transparent;
            border: 0.5px solid rgb(118, 118, 118);
            color: white;
            padding: 0 10px;
        }
    }
</style>