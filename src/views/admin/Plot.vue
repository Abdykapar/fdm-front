<template>
	<div class="plot">
		<div class="plot__head">
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
			<select
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
			</select>
			<select
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
			</select>
		</div>
		<div class="m-4 text-xl plot__body">
			<div class="flex justify-center text-white plot__body__title">
				Flight  (UAFM - UAFO)
			</div>
			<div
				v-for="item in selectedParameters"
				:key="item.id"
				class="m-6 bg-gray-600"
			>
				<div class="p-2 ml-5 text-white">
					{{ item.name }}
				</div>
				<vue-apex-charts
					height="250"
					type="line"
					:options="item.chartOptions"
					:series="item.series"
				/>
			</div>
			<div class="m-6">
				<multiselect
					v-model="value"	
					:options="parameters"
					label="name"
					track-by="name"
					:multiple="true"
					:close-on-select="false"
					@select="onParameterSelect"
					@remove="onParameterRemove"
				/>
			</div>
		</div>
	</div>
</template> 

<script>
import VueApexCharts from 'vue-apexcharts'
import { fileService } from '../../_services/file.service'
import { flightService } from '../../_services/flight.service'
import { eventService } from '../../_services/event.service'
import { otherService } from '../../_services/other.service'
import { mapActions } from 'vuex'

export default {
	name: 'Plot',
	components: { VueApexCharts },
	data () {
		return {
			isShow: true,
			chartOptions: {
				chart: {
					id: 'basic-bar',
					// toolbar: {
					// 	show: false
					// }
				},
				stroke: {
					curve: 'straight',
					colors: [],
					width: 1,
				},
				markers: {
					size: 3,
					colors: [ '#ffffff' ],
					strokeColors: [],
					strokeWidth: 1,
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
				xaxis: {
					labels: {
						show: false
						// formatter: function (value) {
						// 	return value
						// }
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
			selectedParameters: []
		}
	},
	mounted () {
		this.fetchFiles()
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
		fetchFlights (fileId) {
			flightService.getAll(fileId).then(res => {
				this.flights = res
			}).catch(err => {
				console.log(err)
			})
		},
		fetchEvents (flightId) {
			eventService.getAll(flightId).then(res => {
				this.events = res
			}).catch(err => {
				console.log(err)
			})
		},
		fetchEventParameters (eventId) {
			this.setLoading(true)
			otherService.eventParameters(eventId).then(res => {
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
				// if (this.parameters.length) this.chartOptions.labels = this.parameters[0].data.map(i => i.timestamp)
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
			})
		},
		onFlightChange (e) {
			this.fetchEvents(e.target.value)
		},
		onFileChange (e) {
			this.fetchFlights(e.target.value)
		},
		onEventChange (e) {
			this.fetchEventParameters(e.target.value)
		},
		onParameterSelect (opt, id) {
			this.series = [
				{
					name: opt.name,
					data: opt.data.map(i => i.value)
				}
			]
			const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
			this.chartOptions.stroke.colors = [ randomColor ]
			this.chartOptions.markers.strokeColors = [ randomColor ]
			this.chartOptions.labels = opt.data.map(i => i.timestamp)

			this.selectedParameters.push({
				id: opt.id,
				name: opt.name,
				series: [ ...this.series ],
				chartOptions: { ...this.chartOptions }
			})
			this.isShow = true
		},
		onParameterRemove (opt, id) {
			this.selectedParameters = this.selectedParameters.filter(i => i.id !== opt.id)
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
            gap: 1rem;

			select {
				border-color:rgb(118, 118, 118);
			}
        }
    }
</style>