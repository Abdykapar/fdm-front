<template>
	<div id="cesium">
		<div class="content">
			<div class="row">
				<svg
					id="gs"
					height="300"
					width="80"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<clipPath id="gsGroupMask">
							<path d="M 0 0 H 70 V 260 H 0 V 0" stroke="transparent" />
						</clipPath>
					</defs>
					<defs>
						<clipPath id="gsFrontMask">
							<path d="M 1 120 L 35 120 V 110 H 50 V 122 L 70 130 L 50 137 V 150 H 35 V 140 H 1" stroke="transparent" />
						</clipPath>
					</defs>
				</svg>
				<svg
					id="center"
					width="360"
					height="500"
				>
					<defs>
						<clipPath id="myClip">
							<path d="M 40 155 Q 160 25 280 155 V 295 Q 160 410 40 295 V 155" stroke="transparent" />
						</clipPath>
					</defs>
				</svg>
				<svg
					id="altitude"
					height="260"
					width="200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<clipPath id="altitudeMask">
							<path d="M 20 130 L 35 123 V 115 H 70 V 105 H 99 V 155 H 70 V 145 H 35 V 137 L 20 130" stroke="#ffffff" />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div class="row">
				<svg
					id="compass"
					height="300"
					width="300"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<clipPath id="compassMask">
							<path d="M 0 0 H 300 V 88 H 0 V 0"  />
						</clipPath>
					</defs>
				</svg>
			</div>
			<!-- <Attitude :size="350" :pitch="pitch" :roll="roll" /> -->
		</div>
	</div>
</template>

<script>
import { otherService } from '../../_services/other.service'

window.CESIUM_BASE_URL = '/'
import * as Cesium from 'cesium'
import { mapActions } from 'vuex'
import drawSpeedometer from '@/mixins/DrawSpeedometer'
import moment from 'moment'
import _ from 'lodash'
import * as $ from 'jquery'

export default {
	name: 'Cesium',
	mixins: [ drawSpeedometer ],
	data () {
		return {
			flightData: [],
			counter: 0,
			roll: 0,
			pitch: 0,
			viewer: '',
			selectedData: {}
		}
	},
	computed: {
		fileId () {
			return this.$store.getters['file/selectedFile']
		}
	},
	watch: {
		fileId (value) {
			if (value) {
				this.fetchData(value)
			}
		},
	},
	mounted () {
		// this.init()
		Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYWEwOWNkNy05ZTU4LTQxMjQtYmFiNy05NmZmNzY5YWFjMzEiLCJpZCI6NDU3MTQsImlhdCI6MTYxNTc5NDI3OH0.Wpk8AX-oZBjF07M98aCrfVFBmPatRjdV96HawS69RBk'
		this.viewer = new Cesium.Viewer('cesium', {
			terrainProvider: Cesium.createWorldTerrain()
		})
		const osmBuildings = this.viewer.scene.primitives.add(Cesium.createOsmBuildings())
	
		this.makeCanvas(0)
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),
		fetchData (fileId) {
			this.setLoading(true)
			otherService.getFileCoordinates(fileId).then(res => {
				this.flightData = res
				this.init()
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
			})
		},
		init () {
			// const flightData = JSON.parse(
			// 	
			// )
			// const timeStepInSeconds = 30
			const dataLength = this.flightData.length
			// const totalSeconds = timeStepInSeconds * (this.flightData.length - 1)
			// const start = Cesium.JulianDate.fromIso8601('2020-03-09T23:10:00Z')
			const start = Cesium.JulianDate.fromDate(new Date(this.flightData[0].timestamp))
			// const stop = Cesium.JulianDate.addSeconds(start, totalSeconds, new Cesium.JulianDate())
			const stop = Cesium.JulianDate.fromDate(new Date(this.flightData[dataLength - 1].timestamp))
			this.viewer.clock.startTime = start.clone()
			this.viewer.clock.stopTime = stop.clone()
			this.viewer.clock.currentTime = start.clone()
			this.viewer.timeline.zoomTo(start, stop)
			// Speed up the playback speed 50x.
			this.viewer.clock.multiplier = 10
			// Start playing the scene.
			this.viewer.clock.shouldAnimate = true

			// The SampledPositionedProperty stores the position and timestamp for each sample along the radar sample series.
			const positionProperty = new Cesium.SampledPositionProperty()
			for (let i = 0; i < this.flightData.length; i++) {
				const dataPoint = this.flightData[i]
				// if (dataPoint.longitude && dataPoint.latitude && dataPoint.altitude && dataPoint.timestamp) {
					
				// }
				dataPoint.latitude = parseFloat(dataPoint.latitude)
				dataPoint.longitude = parseFloat(dataPoint.longitude)
				dataPoint.altitude = parseFloat(dataPoint.altitude)
				// Declare the time for this individual sample and store it in a new JulianDate instance.
				// const time = Cesium.JulianDate.addSeconds(start, i * timeStepInSeconds, new Cesium.JulianDate())
				const time = Cesium.JulianDate.fromDate(new Date(dataPoint.timestamp))
				const position = Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.altitude)
				// Store the position along with its timestamp.
				// Here we add the positions all upfront, but these can be added at run-time as samples are received from a server.
				positionProperty.addSample(time, position)

				this.viewer.entities.add({
					description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.altitude})`,
					position: position,
					point: { pixelSize: 10, color: Cesium.Color.RED }
				})
			}
			const loadModel  = async () => {
				// Load the glTF model from Cesium ion.
				const airplaneUri = await Cesium.IonResource.fromAssetId(355099)
				// console.log(airplaneUri)
				const airplaneEntity = this.viewer.entities.add({
					availability: new Cesium.TimeIntervalCollection([ new Cesium.TimeInterval({ start: start, stop: stop }) ]),
					position: positionProperty,
					// Attach the 3D model instead of the green point.
					model: { uri: '/airbus200/scene.gltf', scale: 1.4 },
					// Automatically compute the orientation from the position.
					orientation: new Cesium.VelocityOrientationProperty(positionProperty),
					path: new Cesium.PathGraphics({ width: 1 })
				})

				const box = new Cesium.BoxGeometry({
					vertexFormat : Cesium.VertexFormat.POSITION_ONLY,
					maximum : new Cesium.Cartesian3(250000.0, 250000.0, 250000.0),
					minimum : new Cesium.Cartesian3(-250000.0, -250000.0, -250000.0)
				})
				const geometry = Cesium.BoxGeometry.createGeometry(box)
				
				this.viewer.clock.onTick.addEventListener(clock => {
					onTimeChange(clock)
				})

				const onTimeChange = clock => {
					const date = Cesium.JulianDate.toDate(new Cesium.JulianDate(clock.currentTime.dayNumber, clock.currentTime.secondsOfDay))
					const formatDate = moment(date).format('MM/DD/YYYY HH:mm:ss')
					this.selectedData = this.flightData.find(i => i.timestamp === formatDate)
					
					if (this.selectedData) {
						const speed = Math.round(this.selectedData.ground_speed)
						const pitchAngle = parseFloat(this.selectedData.pitch_angle)
						const rollAngle = parseFloat(this.selectedData.roll_angle)
						const altitude = parseFloat(this.selectedData.altitude)
						
						const el = document.getElementById('gsGroupContent')
						const text = document.getElementById('gsText')
						const gsText = document.getElementById('gsFrontContent')
						const frontNum0 = document.getElementById('gsFront0')
						const frontNum1 = document.getElementById('gsFront1')
						const frontNum2 = document.getElementById('gsFront2')
						const aircraftAngle = document.getElementById('aircraftAngle')
						const topArrow = document.getElementById('topArrow')
						const altitudeNum0 = document.getElementById('altitudeNum0')
						const altitudeNum1 = document.getElementById('altitudeNum1')
						const altitudeNum2 = document.getElementById('altitudeNum2')

						const altitudeRuler = document.getElementById('km')
						console.log(altitude)
						if (altitude >= 1800) {
							altitudeRuler.setAttribute('style',`transform: translateY(${altitude * 0.5 - 130}px)`)
							const num0 = (altitude / 100) % 10
							const num1 = (altitude / 1000) % 10 || ''
							const num2 = (altitude / 10000) % 10 || ''

							altitudeNum0.innerHTML = num0
							altitudeNum1.innerHTML = num1
							altitudeNum2.innerHTML = num2

							const texts = document.querySelectorAll('.alt')
							const centerNum = Array.from(texts).find(i => i.attributes.y.value === '136')

							$('.alt').each(function (i) {
								$(this).attr('y', parseInt($(this).attr('y')) + count * 20)
								if (parseInt($(this).attr('y')) >= 172) $(this).attr('y', $(this).attr('y') - 100)   
							})
						}

						// aircraftAngle.setAttribute('style', `transform-origin: 100 100; transform: rotate(${rollAngle}deg);`)
						// console.log(rollAngle)
						aircraftAngle.setAttribute('style', `transform-box: fill-box; transform-origin: center; transform: rotate(${rollAngle}deg) translateY(${pitchAngle * 6.4}px);`)
						text.innerHTML = 'GS ' + speed
						if (speed > 45) {
							
							frontNum0.innerHTML = parseInt(speed / 10) % 10
							frontNum1.innerHTML = parseInt(speed / 100) % 10 || ''
							frontNum2.innerHTML = parseInt(speed / 1000) || ''
							
							el.setAttribute('style',`transform: translateY(${(speed - 45) * 3.3}px)`)
							
							const centerNum = Array.from(gsText.children).find(i => i.attributes.y.value === '136')

							const num = speed % 10
							let count
							if (num < parseInt(centerNum.innerHTML)) {
								count = num + 10 - parseInt(centerNum.innerHTML)
							} else count = num - parseInt(centerNum.innerHTML)
							
							$('.gsT').each(function (i) {
								$(this).attr('y', parseInt($(this).attr('y')) + count * 18)
								if (parseInt($(this).attr('y')) >= 172) $(this).attr('y', $(this).attr('y') - 180)   
							})

						}
					}

				}

				this.viewer.trackedEntity = airplaneEntity
			}

			loadModel()
		}
	}
}
</script>

<style>
	#cesium {
		position: relative;
		width: calc(100vw - 240px);
		height: calc(100vh - 100px);
	}
	.content {
		position: absolute;
		left: 30px;
		top: 30px;
		z-index: 1;
	}
	#gs {
		/* border: solid 1px #FFFFFF; */
	}

	#center {
		position: absolute;
		top: -91px;
		left: 85px;
	}

	.mask {
		clip-path: url(#gsFrontMask);
	}
	.indicator-mask {
		clip-path: url(#myClip);
	}
	#altitudeBack {
		clip-path: url(#altitudeMask);
	}
	
	#altitude {
		margin-left: 340px;
	}

	#compass {
		margin-left: 95px;
		margin-top: -22px;
	}

	#main {
		clip-path: url(#compassMask);
	}

	#gsGroup {
		clip-path: url(#gsGroupMask);
	}

	.row {
		display: flex;
	}
</style>
