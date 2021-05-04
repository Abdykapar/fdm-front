<template>
	<div class="plot">
		<div class="plot__head">
			<div class="flex flex-col">
				<label>Files</label>
				<select
					v-model="file"
					class="px-3 py-2 bg-transparent border rounded outline-none w-60 text-gray-50"
					placeholder="Select a file"
					@change="onFileChange"
				>
					<option
						v-for="f in files"
						:key="f.id"
						:value="f.id"
						class="py-1"
					>
						{{ f.file_name | crop }}
					</option>
				</select>
			</div>
			<div class="w-90">
				<label>Paremeters</label>
				<multiselect
					v-model="value"	
					:options="parameters"
					label="name"
					track-by="name"
					select-label=""
					deselect-label=""
					:multiple="true"
					:close-on-select="false"
					@select="onParameterSelect"
					@remove="onParameterRemove"
				/>
			</div>
			<!-- <select
				v-model="flight"
				class="px-3 py-2 bg-transparent border rounded outline-none w-60 text-gray-50"
				@change="onFlightChange"
			>
				<option
					v-for="f in flights"
					:key="f.id"
					:value="f.id"
					class="py-1"
				>
					{{ f.dep_airport }} - {{ f.arr_airport }}
				</option>
			</select> -->
			<!-- <select
				v-model="event"
				class="px-3 py-2 bg-transparent border rounded outline-none w-60 text-gray-50"
				@change="onEventChange"
			>
				<option
					v-for="f in events"
					:key="f.id"
					:value="f.id"
					class="py-1"
				>
					{{ f.event_name }}
				</option>
			</select> -->
		</div>
		<div class="m-4 text-xl plot__body">
			<div class="flex justify-center text-white plot__body__title">
				Flight  (UAFM - UAFO)
			</div>

			<div class="m-10">
				<div
					id="container"
					class=""
				/>
			</div>
		</div>
	</div>
</template> 

<script>
import { fileService } from '../../_services/file.service'
import { otherService } from '../../_services/other.service'
import { mapActions } from 'vuex'
import Highcharts from 'highcharts'
import randomColor from 'randomcolor'

export default {
	name: 'Plot',
	data () {
		return {
			isShow: true,
			chartOptions: {
				chart: {
					id: 'basic-bar',
					group: 'social',
					type: 'line'
				},
				colors: [ '#499F68' ],
				stroke: {
					curve: 'straight',
					width: 2,
				},
				xaxis: {
					labels: {
						show: false,
					},
					axisBorder: {
						color: '#33393F',
					}
				},
				yaxis: {
					labels: {
						style: {
							colors: [ '#ffffff' ],
							fontSize: '12px',
							fontFamily: 'Helvetica, Arial, sans-serif',
							fontWeight: 400,
							cssClass: 'apexcharts-xaxis-label',
						},
					}
				},
				grid: {
					borderColor: '#33393F',
					strokeDashArray: 0,
					position: 'back',
					row: {
						colors: [ 'transparent' ], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
			},
			series: [],
			files: [],
			flights: [],
			flight: '',
			file: '',
			event: '',
			events: [],
			value: [],
			options: [ 'list', 'of', 'options' ],
			parameters: [],
			selectedParameters: [],
			syncExtremes: '',
			xData: []
		}
	},
	mounted () {
		this.fetchFiles()
		this.highChartInit()
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),
		fetchFiles () {
			fileService.getAll().then(res => {
				this.files = res
			}).catch(err => {
				console.log(err)
			})
		},
		fetchEventParameters (fileId) {
			this.setLoading(true)
			otherService.eventParameters(fileId).then(res => {
				this.parameters = []
				const d = res.filter((i, index, self) => self.findIndex(j => j.id === i.id) === index)
				d.forEach(i => {
					const a = {
						id: i.id,
						name: i.title,
						data: res.filter(j => j.id === i.id)
					}
					this.parameters.push(a)
				})
				if (this.parameters.length) {
					const d = this.parameters.reduce((acc, i) => i.data.length > acc.length ? i.data : acc, [] )
					this.xData = d.map(i => i.timestamp)
				}
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
			})
		},
		onFileChange (e) {
			this.fetchEventParameters(e.target.value)
		},
		onParameterSelect (opt, id) {
			this.selectedParameters.push({ name: opt.name, id: opt.id })
			const dataset = { 
				name: opt.name,
				data: this.xData.map(i => {
					const a = opt.data.find(j => j.timestamp === i)
					if (a) return parseFloat(a.value)
					return 0
				} ),
				'type': 'line',
			}
			this.makeDataset(dataset)
		},
		makeDataset (dataset) {
			function getRandomColor () {
				const letters = 'BCDEF'.split('')
				let color = '#'
				for (let i = 0; i < 6; i++ ) {
					color += letters[Math.floor(Math.random() * letters.length)]
				}
				return color
			}
			dataset.data = Highcharts.map(dataset.data, (val, j) => {
				return [ this.xData[j], val ]
			})

			const chartDiv = document.createElement('div')
			chartDiv.className = 'chart'
			document.getElementById('container').appendChild(chartDiv)

			Highcharts.chart(chartDiv, {
				chart: {
					marginLeft: 40, // Keep all charts left aligned
					spacingTop: 20,
					spacingBottom: 20,
					style: {
						color: '#c8c9c5'
					}
				},
				point: {
					events: {
						mouseOut: function () {
							this.series.chart.tooltip.hide()
						}
					},
				},
				colors: [ 'red', 'orange', 'green', 'blue', 'purple', 'brown' ],
				title: {
					text: dataset.name,
					align: 'left',
					margin: 0,
					x: 30,
					style: {
						color: '#c8c9c5'
					}
				},
				credits: {
					enabled: false
				},
				legend: {
					enabled: false
				},
				xAxis: {
					crosshair: true,
					events: {
						setExtremes: this.syncExtremes
					},
					title: {
						style: {
							color: '#c8c9c5'
						}
					},
					categories: this.xData,
					labels: {
						enabled: false,
						style: {
							color: '#c8c9c5'
						}
					}
				},
				yAxis: {
					title: {
						text: null,
						style: {
							color: '#c8c9c5'
						}
					},
					labels: {
						style: {
							color: '#c8c9c5',
						}
					}
				},
				tooltip: {
					backgroundColor: '#fff',
					hideDelay: 4000,
					borderColor: '#C6EDEE',
					borderRadius: 10,
					borderWidth: 2,
					formatter: function () {
						return `<span class="uppercase text-base">${this.series.name}</span> <br> 
								<span class="text-xs">Date & Time: </span> <span class="text-xs">${this.x}</span><br>
								<span class="text-xs">Value: </span> <span class="text-xs">${this.y}</span>`
					},
					headerFormat: '',
					shadow: false,
					style: {
						fontSize: '18px',
						color: '#000',
					},
					valueDecimals: dataset.valueDecimals
				},
				series: [ {
					data: dataset.data,
					name: dataset.name,
					type: dataset.type,
					color: randomColor(),
					fillOpacity: 0.3,
					turboThreshold: 8000,
					tooltip: {
						// valueSuffix: ' ' + dataset.unit
					}
				} ]
			})
		},	
		onParameterRemove (opt, id) {
			const index = this.selectedParameters.findIndex(i => i.id === opt.id)
			const chart = Highcharts.charts[index]
			chart.container.parentNode.parentNode.removeChild(chart.container.parentNode)
			Highcharts.charts.splice(index, 1)
			this.selectedParameters.splice(index, 1)
		},
		highChartInit () {
			[ 'mousemove', 'touchmove', 'touchstart' ].forEach(eventType => {
				document.getElementById('container').addEventListener(
					eventType,
					e => {
						let chart
						let point
						let i
						let event

						for (i = 0; i < Highcharts.charts.length; i = i + 1) {
							chart = Highcharts.charts[i]
							// Find coordinates within the chart
							event = chart.pointer.normalize(e)
							// Get the hovered point
							point = chart.series[0].searchPoint(event, true)

							if (point) {
								point.highlight(e)
							}
						}
					}
				)
			})
			Highcharts.Pointer.prototype.reset = function () {
				return undefined
			}
			Highcharts.Point.prototype.highlight = function (event) {
				event = this.series.chart.pointer.normalize(event)
				this.onMouseOver() // Show the hover marker
				this.series.chart.tooltip.refresh(this) // Show the tooltip
				this.series.chart.xAxis[0].drawCrosshair(event, this) // Show the crosshair
			}
			this.syncExtremes =  e => {
				const thisChart = this.chart

				if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
					Highcharts.each(Highcharts.charts, chart => {
						if (chart !== thisChart) {
							if (chart.xAxis[0].setExtremes) { // It is null while updating
								chart.xAxis[0].setExtremes(
									e.min,
									e.max,
									undefined,
									false,
									{ trigger: 'syncExtremes' }
								)
							}
						}
					})
				}
			}
		}
	}
}
</script>

<style lang="scss">
	.multiselect__tags {
		background: transparent;
		border-color:rgb(118, 118, 118);
		input {
			background: transparent;
		}

		.multiselect__single {
			background: transparent;
			color: white;
		}
	}
    .plot {
        &__head {
            display: flex;
            justify-content: center;
			align-items: center;
            gap: 2rem;
			color: #fff;

			select {
				border-color:rgb(118, 118, 118);
			}
        }
    }
.highcharts-figure, .highcharts-data-table table {
  min-width: 320px; 
  max-width: 800px;
  margin: 1em auto;
}

.chart {
  height: 120px;
//   width: 42vw;
}

.highcharts-data-table table {
	font-family: Verdana, sans-serif;
	border-collapse: collapse;
	border: 1px solid #c8c9c5;
	margin: 10px auto;
	text-align: center;
	width: 100%;
	max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #3f3a3a;
}
.highcharts-data-table tr:hover {
  background: #303336;
}
.highcharts-background {
	fill: rgba(255, 255, 255, 0.02);
	// fill: rgba($color: #fff, $alpha: 1);
}
</style>