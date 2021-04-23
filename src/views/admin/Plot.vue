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
			<div
				class="m-6 bg-gray-600"
			>
				<vue-apex-charts
					v-if="isShow"
					height="450"
					type="line"
					:options="chartOptions"
					:series="series"
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
			isShow: false,
			chartOptions: {
				chart: {
					id: 'basic-bar',
					// toolbar: {
					// 	show: false
					// }
				},
				colors: [ '#499F68' ],
				stroke: {
					curve: 'straight',
					width: 2,
				},
				// markers: {
				// 	size: 1,
				// 	strokeColors: [],
				// 	strokeWidth: 1,
				// 	strokeOpacity: 0.9,
				// 	strokeDashArray: 0,
				// 	fillOpacity: 1,
				// 	discrete: [],
				// 	shape: 'circle',
				// 	radius: 1,
				// 	offsetX: 0,
				// 	offsetY: 0,
				// 	onClick: undefined,
				// 	onDblClick: undefined,
				// 	showNullDataPoints: true,
				// 	hover: {
				// 		size: undefined,
				// 		sizeOffset: 1
				// 	}
				// },
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
		// fetchFlights (fileId) {
		// 	flightService.getAll(fileId).then(res => {
		// 		this.flights = res
		// 	}).catch(err => {
		// 		console.log(err)
		// 	})
		// },
		// fetchEvents (flightId) {
		// 	eventService.getAll(flightId).then(res => {
		// 		this.events = res
		// 	}).catch(err => {
		// 		console.log(err)
		// 	})
		// },
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
				if (this.parameters.length) this.chartOptions.labels = this.parameters[0].data.map(i => i.timestamp)
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
			})
		},
		// onFlightChange (e) {
		// 	this.fetchEvents(e.target.value)
		// },
		onFileChange (e) {
			this.fetchEventParameters(e.target.value)
		},
		// onEventChange (e) {
		// 	this.fetchEventParameters(e.target.value)
		// },
		onParameterSelect (opt, id) {
			this.isShow = false
			this.series.push({
				name: opt.name,
				id: opt.id,
				data: opt.data.map(i => i.value)
			})
			const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
			this.chartOptions.colors.push(randomColor)
			// this.chartOptions.markers.strokeColors = [ randomColor ]
			this.chartOptions.labels = opt.data.map(i => i.timestamp)

			console.log(this.chartOptions.labels)
			this.$nextTick(() => {
				this.isShow = true
			})
		},
		onParameterRemove (opt, id) {
			const index = this.series.findIndex(i => i.id === opt.id)
			this.chartOptions.colors.splice(index, 1)
			this.series = this.series.filter(i => i.id !== opt.id)
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
</style>