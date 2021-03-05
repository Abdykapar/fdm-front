<template>
	<div>
		<button
			class="print"
			@click="makeChart"
		>
			<img
				src="../../assets/icons/report.svg"
				alt=""
			> Print
		</button>
		<img
			id="image"
			src="/img/airmanas.jpg"
			alt=""
			hidden
		>
		<div style="position: absolute; z-index: -100">
			<canvas
				id="canvas"
				height="450"
				width="600"
			/>
		</div>
	</div>
</template>

<script>
import pdfMake from 'pdfmake-lite'
import pdfFonts from 'pdfmake-lite/build/vfs_fonts'
const image = require('../../../public/img/airmanas.jpg')
import * as d3 from 'd3'
import Chart from 'chart.js'
import { otherService } from '../../_services/other.service'
import { mapActions } from 'vuex'

pdfMake.vfs = pdfFonts.pdfMake.vfs
export default {
	name: 'TopTriggers',
	props: {
		aircraft: { type: Number, default: 0 },
		start: { type: String, default: '' },
		end: { type: String, default: '' },
	},
	data () {
		return {
			bar: ''
		}
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),
		makeChart () {
			this.setLoading(true)
			otherService.topEvents(this.aircraft, this.start, this.end).then(res => {
				const labels = res.map(i => i.title)
				const data = res.map(i => i.high)
				this.bar = new Chart(document.getElementById('canvas').getContext('2d'),{
					type: 'bar',
					data: {
						labels: labels,
						datasets: [ {
							label: 'High',
							data: data,
							backgroundColor: '#D82904',
							// borderColor: [
							// 	'rgba(255, 99, 132, 1)',
							// 	'rgba(54, 162, 235, 1)',
							// 	'rgba(255, 206, 86, 1)',
							// 	'rgba(75, 192, 192, 1)',
							// 	'rgba(153, 102, 255, 1)',
							// 	'rgba(255, 159, 64, 1)'
							// ],
							// borderWidth: 1
						} ]
					},
					options: {
						title: {
							display: true,
							text: 'Top 10 High Severity Events per 100 Flights (Air Manas)',
							fontSize: 25,
							fontColor: '#000'
						},
						legend: {
							display: true,
							fontColor: '#000'
						},
						scales: {
							yAxes: [ {
								ticks: {
									beginAtZero: true,
									fontColor: '#000'
								},
								scaleLabel: {
									display: true,
									labelString: 'Event / 100 Flights',
									fontSize: 20,
									fontColor: '#000'
								}
							} ],
							xAxes: [ {
								ticks: {
									fontColor: '#000'
								},
								scaleLabel: {
									display: true,
									labelString: 'Event Name',
									fontSize: 20,
									fontColor: '#000'
								}
							} ]
						},
						animation: {
							onComplete: this.exportPdf
						}
					}
				})
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
				this.$toastr.e(err)
			})
		},
		exportPdf () {
			const c = document.createElement('canvas')
			const img = document.getElementById('image')
			c.height = img.naturalHeight
			c.width = img.naturalWidth
			const ctx = c.getContext('2d')

			const items = [
				'Late Thrust Reduction at Landing',
				'Pitch Low at Touchdown',
				'Late Rotation',
				'Short Flare',
				'GPWS Warning Glideslope',
				'Late Flare',
				'Smoke Warning',
				'Autoland Warning for Airmanas',
				'High Pitch Rate at Takeoff',
				'Low Speed at Landing'
			]

			ctx.drawImage(img, 0, 0, c.width, c.height)
			const base64String = c.toDataURL()
			const docDefinition = {
				info: {
					title: 'Title',
					author: 'SigmaSoft Team',
				},
				pageOrientation: 'portrait',
				pageMargins: [ 30, 30, 30, 30 ],
				pageSize: 'A4',
				ownerPassword: '123456',
				permissions: {
					printing: 'highResolution', //'lowResolution'
					modifying: false,
					copying: false,
					annotating: true,
					fillingForms: true,
					contentAccessibility: true,
					documentAssembly: true
				},
				content: [
					{
						image: 'imageUrl',
						width: 150,
						height: 25,
						style: 'logo'
					},
					{
						text: 'Air Manas EX-402 Monthly FDM Report March, 2021',
						style: 'header',
						pageBreak: 'after'
					},
					{
						image: 'imageUrl',
						width: 150,
						height: 25,
						style: 'logo',
					},
					{
						text: 'Table of Contents',
						style: 'subHeader'
					},
					{
						ol: [
							'Top 10 High Severity Events per 100 Flights (Air Manas)',
							'Unstable Approach Trend - Air Manas',
							'Thrust Reduction Late at Landing',
							'Taxi Speed High in Straight LineTrend - Air Manas',
							'Short Flare Time Trend - Air Manas',
							'Reversers Delayed at Landing Trend - Air Manas',
							'Pitch Low at Touchdown Trend - Air Manas',
							'High Vertical Speed before Touchdown Trend - Air Manas',
							'High Acceleration at Touchdown Event Counts',
							'Hard Landing Hazard Trend - Air Manas'
						],
						style: 'ul',
						pageBreak: 'after'
					},
					{
						image: 'imageUrl',
						width: 150,
						height: 25,
						style: 'logo',
					},
					{
						text: '1.  Top 10 High Severity Events per 100 Flights (Air Manas)',
						margin: [ 20, 30, 10, 20 ]
					},
					{
						image: 'bar',
						width: 450,
						height: 350
					},
					{
						style: 'table',
						table: {
							widths: [ 30, '*', '*', '*', '*', '*', '*', '*', '*', '*', '*' ],
							body: [
								[
									{ text: '', style: 'tableTd' },
									...items.map(i => ({ text: i, style: 'tableTd' }))
								],
								[ { text: 'High Ratio', style: 'tableTd', alignment: 'left' }, '0.08', '0.08', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4' ],
								[ { text: 'High Count', style: 'tableTd', alignment: 'left' }, '0.2', '0.08', '0.08', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4' ],
								[ { text: 'Number of Flights', style: 'tableTd', alignment: 'left' }, '0.2', '0.08', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4', '0.4' ],
							]
						},
						layout: {
							fillColor: function (rowIndex, node, columnIndex) {
								return (rowIndex === 0 || columnIndex === 0) ? '#CCCCCC' : null
							},
							hLineWidth: function (i, node) {
								return 0
							},
							vLineWidth: function (i, node) {
								return 0
							},
						}
					},
				],
				images: {
					imageUrl: base64String,
					bar: this.bar.toBase64Image()
				},
				styles: {
					logo: {
						alignment: 'right'
					},
					header: {
						fontSize: 28,
						bold: true,
						margin: [ 30, 40, 30, 10 ],
						alignment: 'center',
					},
					subHeader: {
						fontSize: 18,
						bold: true,
						margin: [ 30, 30, 30, 30 ]
					},
					ul: {
						fontSize: 12,
						margin: [ 50, 10, 10, 10 ]
					},
					tableTd: {
						bold: true,
						fontSize: 8,
					},
					table: {
						margin: [ -15, 40, 0, 0 ],
						fontSize: 8,
						alignment: 'right'
					}
				},
				defaultStyle: {
					// columnGap: 20
				}
			}
			pdfMake.createPdf(docDefinition).download(`test.pdf`)
			this.setLoading(false)
		},
	}
}
</script>

<style lang="scss" scoped>
.print {
	width: 148px;
	height: 36px;
	border: 1px solid #FFFFFF;
	border-radius: 2px;
	background: inherit;
	outline: none;
	color: #FFFFFF;
	font-size: 14px;
	line-height: 19px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		margin-right: 10px;
	}
}
.graph {
	width: auto;
}

.tooltip {
	color:black;
}

.axis {
	font: 12px Georgia, Arial, sans-serif;
}

.axis path, .axis line {
	fill: none;
	stroke: #dadada;
	shape-rendering: crispEdges;
}

</style>