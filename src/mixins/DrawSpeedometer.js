export default {
	methods: {
		makeCanvas (selectedData) {
			const gs = document.getElementById('gs')
			const center = document.getElementById('center')
			const altitude = document.getElementById('altitude')
			const compass = document.getElementById('compass')

			this.leftSide(gs, 260, 70, selectedData)
			this.centerSide(center)
			this.altitudeSide(altitude)
			this.compassSide(compass)
			
		},
		centerSide (centerSvg) {
			const group = document.createElementNS(centerSvg.namespaceURI, 'g')

			const arc = document.createElementNS(centerSvg.namespaceURI, 'path')

			arc.setAttribute('d', 'M 20 140 Q 160 0 300 140')
			arc.setAttribute('stroke', 'white')
			arc.setAttribute('fill', 'transparent')
			arc.setAttribute('stroke-width', '2.4')

			group.appendChild(arc)

			const x1 = 130
			const circleX = 60
			const circleY = 370
			const circleXV = 330
			const circleYV = 125

			const linePoints = [
				{
					d: 'M 20 160 V 145',
					t: 'transform: rotate( -43deg) translateX(-100px) translateY(-44px)'
				},
				{
					d: 'M 35 130 V 123',
					t: 'transform: rotate(-38deg) translateX(-63px) translateY(-10px)'
				},
				{
					d: 'M 80 90 V 75',
					t: 'transform: rotate(-32deg) translateX(-57px) translateY(32px)'
				},
				{
					d: 'M 90 60 V 53',
					t: 'transform: rotate(-21deg) translateX(-17px) translateY(53px)'
				},
				{
					d: 'M 100 70 V 63',
					t: 'transform: rotate(-14deg) translateX(12px) translateY(33px)'
				},
				{
					p: '160,12 152,0 168,0 160,12',
					t: 'transform: translate(0px, 56px)',
					c: '#ffffff',
					e: 'polygon',
				},
				{
					d: 'M 185 60 V 53',
					t: 'transform: rotate(9deg) translateX(12px) translateY(-17px)'
				},
				{
					d: 'M 185 67 V 60',
					t: 'transform: rotate(23deg) translateX(44px) translateY(-76px)'
				},
				{
					d: 'M 235 58 V 43',
					t: 'transform: rotate(33deg) translateX(15px) translateY(-110px)'
				},
				{
					d: 'M 250 90 V 83',
					t: 'transform: rotate(38deg) translateX(34px) translateY(-167px)'
				},
				{
					d: 'M 300 105 V 90',
					t: 'transform: rotate(43deg) translateX(15px) translateY(-208px)'
				},
				{
					type: 'g',
					id: 'screen',
					class: 'indicator-mask',
					children: [
						{
							d: 'M 0 0 H 320 V 225 H 0 V 0',
							c: '#3C508C',
							o: '0.8',
							s: 'transparent'
						},
						{
							d: 'M 40 225 H 280',
						},
						{
							d: 'M 0 225 H 320 V 420 H 0 V 225',
							c: '#5D3C19',
							o: '0.7',
							s: 'transparent'
						},
						{
							p: '152,28 160,15 168,28 152,28',
							t: 'transform: translate(0px, 56px) rotate(0deg); transform-origin: 50% 32%;',
							c: 'transparent',
							e: 'polygon',
							id: 'topArrow',
							front: true
						},
						{
							d: 'M 136 224.5 H 184 M 140 226 V 230 M 180 226 V 230',
						},
						{
							f: (y1 = 300) => `M ${x1} ${y1} H ${x1 + 60} M ${x1 + 25} ${y1 - 13} H ${x1 + 35} M ${x1 + 15} ${y1 - 2 * 13} H ${x1 + 45} M ${x1 + 25} ${y1 - 3 * 13} H ${x1 + 35}`,
							text: '10'
						},
						{
							f: (y1 = 280) => `M ${x1} ${y1} H ${x1 + 60} M ${x1 + 25} ${y1 + 13} H ${x1 + 35} M ${x1 + 15} ${y1 + 2 * 13} H ${x1 + 45} M ${x1 + 25} ${y1 + 3 * 13} H ${x1 + 35}`,
							loop: 3,
						}
					]
				},
				{
					p: '50,225 50,215 100,215 100,235 90,235 90,225',
					c: '#000000',
					s: '#FFFF00',
					e: 'polygon',
				},
				{
					p: '270,225 270,215 220,215 220,235 230,235 230,225',
					c: '#000000',
					s: '#FFFF00',
					e: 'polygon',
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX + 25,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX + 50,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX + 75,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					d: `M ${circleX + 100} ${circleY - 5} V ${circleY + 5}`,
					s: '#FFFF00'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX + 125,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX + 150,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX + 175,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleX + 200,
						cy: circleY,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV + 25,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV + 50,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV + 75,
						r: 3
					},
					e: 'circle'
				},
				{
					d: `M ${circleXV - 5} ${circleYV + 100} H ${circleXV + 5}`,
					s: '#FFFF00'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV + 125,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV + 150,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV + 175,
						r: 3
					},
					e: 'circle'
				},
				{
					attributes:{ 
						fill: '#FFFFFF',
						stroke: '#FFFFFF',
						cx: circleXV,
						cy: circleYV + 125,
						r: 3
					},
					e: 'circle'
				},
			]

			for (let i = 0; i < linePoints.length; i++) {
				const item = linePoints[i]

				if (item.type) {
					const groupPoint = document.createElementNS(centerSvg.namespaceURI, item.type)
					groupPoint.setAttribute('id', item.id)
					groupPoint.setAttribute('class', item.class)
	
					const innerGroupPoint = document.createElementNS(centerSvg.namespaceURI, 'g')
					innerGroupPoint.setAttribute('style', 'transform-box: fill-box; transform-origin: center; transform: rotate(0deg);')
					innerGroupPoint.setAttribute('id', 'aircraftAngle')
					
					groupPoint.appendChild(innerGroupPoint)

					if (item.children) {
						for (let j = 0; j < item.children.length; j++) {
							const el = item.children[j]
							if (el.loop) {
								let y = 173
								for (let k = 0; k < el.loop; k++){
									el.text = (k + 1) * 10
									this.makeSvgElement(centerSvg, el, innerGroupPoint, y)
									y -= 52
								}
							} else {
								if (el.front) this.makeSvgElement(centerSvg, el, group)
								else this.makeSvgElement(centerSvg, el, innerGroupPoint)
							}
						}
					}
					group.appendChild(groupPoint)
				} else {
					if (item.e === 'circle') {
						this.drawCircle(centerSvg, group, item.attributes)
					}
					else this.makeSvgElement(centerSvg, item, group)
				}
			}

			centerSvg.appendChild(group)
		},
		drawCircle (svg, parent, attributes) {
			const circle = document.createElementNS(svg.namespaceURI, 'circle')
			for (const [key, value] of Object.entries(attributes)) {
				circle.setAttribute(key, value)
			}
			parent.appendChild(circle)
		},

		altitudeSide (svg) {
			const group = document.createElementNS(svg.namespaceURI, 'g')
			svg.appendChild(group)
			const x = 20
			const space = 10
			const points = [
				{
					d: 'M 20 0 H 100 V 260 H 20 V 0',
					s: '#ffffff',
					c: '#050A11',
					o: 0.4
				},
				{
					f: (y = 270) => `
						M ${x} ${y - space} H ${x + 20} 
						M ${x} ${y - 2 * space} H ${x + 10}
						M ${x} ${y - 3 * space} H ${x + 10}
						M ${x} ${y - 4 * space} H ${x + 10}
						M ${x} ${y - 5 * space} H ${x + 10}
					`,
					count: 500,
					id: 'km', 
					mark: 'km',
					y: 270,
					x: 47,
					tf: i => i * 100,
					increment: -50,
					textPlaceIncrement: -7
				},
				{
					d: 'M 100 0 H 150 V 100 L 100 130 L 150 160 V 260 H 100',
					s: '#ffffff',
					c: '#050A11',
					o: 0.4
				},
				{
					f: y => `M 100 ${y - 30} H 110 M 100 ${y} H 120`,
					s: '#ffffff',
					count: 2,
					id: '',
					y: 190,
					x: 127,
					tf: i => i + 1,
					increment: 60,
					textPlaceIncrement: 3
				},
				{
					f: y => `M 100 ${y + 30} H 110 M 100 ${y} H 120`,
					s: '#ffffff',
					count: 2,
					id: '',
					y: 70,
					x: 127,
					tf: i => i + 1,
					increment: -60,
					textPlaceIncrement: 3
				},
				{
					p: '100,75 115,65 165,65 165,84 116,84',
					t: 'transform: translate(0px, 56px)',
					s: '#ffffff',
					c: '#050A11',
					e: 'polygon',
					o: 0.8,
					text: '-89',
					sw: 1,
					x: 125,
					y: 135,
					fs: 14
				},
				{
					type: 'g',
					id: 'altitudeBack',
					children: [
						{
							d: 'M 20 130 L 35 123 V 115 H 70 V 105 H 99 V 155 H 70 V 145 H 35 V 137 L 20 130',
							c: '#050A11',
							s: '#ffffff',
							o: 0.8,
							text: '0',
							sw: 1,
							x: 62,
							y: 136,
							fs: 18,
							textId: 'altitudeNum0'
						},
						{
							text: '8',
							sw: 1,
							x: 50,
							y: 136,
							fs: 18,
							textId: 'altitudeNum1'
						},
						{
							text: '1',
							sw: 1,
							x: 38,
							y: 136,
							fs: 18,
							textId: 'altitudeNum2'
						},
						{
							text: '00',
							textClass: 'alt',
							x: 74,
							y: 156,
							fs: 18
						},
						{
							text: '20',
							textClass: 'alt',
							x: 74,
							y: 136,
							fs: 18
						},
						{
							text: '40',
							textClass: 'alt',
							x: 74,
							y: 116,
							fs: 18
						},
						{
							text: '60',
							textClass: 'alt',
							x: 74,
							y: 96,
							fs: 18
						},
						{
							text: '80',
							x: 74,
							y: 76,
							fs: 18
						}
					]
				},
			]
			

			points.forEach(element => {
				if (element.count) {
					const g = document.createElementNS(svg.namespaceURI, 'g')
					g.setAttribute('id', element.id)
					if (element.mark === 'km') g.setAttribute('style', 'transform: translateY(770px)')
					group.appendChild(g)
					let y = element.y
					for (let  i = 0; i < element.count; i++) {
						this.makeSvgElement(svg, element, g, y)
						const text = element.tf(i)
						this.createText(svg, element.x, y + element.textPlaceIncrement, g, text, 11)
						y += element.increment
					}
				}
				else if (element.children) {
					const g = document.createElementNS(svg.namespaceURI, element.type)
					g.setAttribute('id', element.id)
					group.appendChild(g)
					for (let  i = 0; i < element.children.length; i++) {
						const el = element.children[i]
						this.makeSvgElement(svg, el, g)
						this.createText(svg, el.x, el.y, g, el.text, el.fs, el.textId, el.textClass)
					}
				}
				else {
					this.makeSvgElement(svg, element, group)
					if (element.text) {
						this.createText(svg, element.x, element.y, group, element.text, element.fs, element.textId)
					}
				}
			});
		},

		makeSvgElement (centerSvg, item, group, y = 280) {
			const groupPoint = document.createElementNS(centerSvg.namespaceURI, 'g')
			groupPoint.setAttribute('style', item.t)
			let point
			if (item.e) {
				point = document.createElementNS(centerSvg.namespaceURI, item.e)
			} else {
				point = document.createElementNS(centerSvg.namespaceURI, 'path')
			}
			if (item.f) {
				point.setAttribute('d', item.f(y))
			} else point.setAttribute('d', item.d || '')
			if (item.p) {
				point.setAttribute('points', item.p)
			}
			if (item.text) {
				this.createText(centerSvg, 100, y + 4, group, item.text)
				this.createText(centerSvg, 200, y + 4, group, item.text)
			}
			if (item.o) {
				point.setAttribute('fill-opacity', item.o)
			}
			point.setAttribute('stroke-linejoin', 'round')
			point.setAttribute('stroke-linecap', 'round')
			if (item.s) {
				point.setAttribute('stroke', item.s)
			} else point.setAttribute('stroke', 'white')
			if (item.c) {
				point.setAttribute('fill', item.c)
			} else {
				point.setAttribute('fill', 'transparent')
			}
			if (item.sw) {
				point.setAttribute('stroke-width', item.sw)	
			}
			else point.setAttribute('stroke-width', '2')
			if (item.id) {
				point.setAttribute('id', item.id)
			}
			groupPoint.appendChild(point)
			group.appendChild(groupPoint)
		},
		createText (svg, x, y, parent, text,  fSize = 15, id, cl) {
			const text1 = document.createElementNS(svg.namespaceURI, 'text')
			text1.setAttribute('x', `${x}`)
			text1.setAttribute('y', `${y}`)
			text1.setAttribute('fill', '#ffffff')
			if (id) {
				text1.setAttribute('id', id)
			}
			if (cl) {
				text1.setAttribute('class', cl)
			}
			text1.setAttribute('style', `font-size: ${fSize}px`)
			text1.innerHTML = `${text}`
			parent.appendChild(text1)
		},
		leftSide (gs, height, width, data) {
			const ground_speed = data ? Math.round(data.ground_speed) : (ground_speed || 0)
			const container = gs
			// container.setAttribute('stroke', '#ffffff')
			// container.setAttribute('fill', 'transparent')
			// container.setAttribute('width', '60px')
			// container.setAttribute('height', '250px')
			// container.setAttribute('style', 'height: 260px; width: 70px; border: 1px solid white;')
			// gs.appendChild(container)
			const border = document.createElementNS(gs.namespaceURI, 'path')
			border.setAttribute('d','M 0 0 H 70 V 260 H 0 V 0')
			border.setAttribute('stroke','white')
			border.setAttribute('fill','#050A11')
			border.setAttribute('opacity', 0.4)
			border.setAttribute('stroke-width','2')
			container.appendChild(border)
			const gsMeter = document.createElementNS(gs.namespaceURI, 'path')
			let m = ''; let m2 = ''
			const part = height / 4

			const gsContainer = document.createElementNS(gs.namespaceURI, 'g')
			gsContainer.setAttribute('id','gsGroup')
			container.appendChild(gsContainer)
			const gsGroup = document.createElementNS(gs.namespaceURI, 'g')
			gsGroup.setAttribute('id','gsGroupContent')
			// gsGroup.setAttribute('style',`transform: translateY(${ground_speed}px);`)
			
			gsContainer.appendChild(gsGroup)
			for (let i = 1; i <= 100; i++) {
				m += `M ${width} ${height - i * part} L 50 ${height - i * part} `
				m2 += ` M ${width} ${height + part / 2 - i * part} L 60 ${height + part / 2 - i * part} `
				const text = document.createElementNS(gs.namespaceURI, 'text')
				text.setAttribute('x', `${30}`)
				text.setAttribute('y', `${height - i * part + 3}`)
				text.setAttribute('fill', '#ffffff')
				text.setAttribute('style', 'font-size: 11px')
				text.innerHTML = `${20 * i}`
				gsGroup.appendChild(text)
			}

			gsMeter.setAttribute('d', m + m2)
			gsMeter.setAttribute('stroke','white')
			gsGroup.appendChild(gsMeter)

			const path = document.createElementNS(gs.namespaceURI, 'path')
			path.setAttribute('d','M 1 120 L 35 120 V 110 H 50 V 122 L 70 130 L 50 137 V 150 H 35 V 140 H 1')
			path.setAttribute('stroke','white')
			path.setAttribute('fill','#050A11')
			path.setAttribute('opacity', 0.8)
			container.appendChild(path)

			// Bottom GS text
			const gsContent = document.createElementNS(gs.namespaceURI, 'path')
			gsContent.setAttribute('d','M 1 270 H 69 V 290 H 1 V 270')
			gsContent.setAttribute('stroke','transparent')
			gsContent.setAttribute('fill','#050A11')
			gsContent.setAttribute('opacity', 0.8)
			container.appendChild(gsContent)

			const gsText = document.createElementNS(gs.namespaceURI, 'text')
			gsText.setAttribute('x', `${3}`)
			gsText.setAttribute('y', `${286}`)
			gsText.setAttribute('fill', '#ffffff')
			gsText.setAttribute('id', 'gsText')
			gsText.setAttribute('style', 'font-size: 17px')

			gsText.innerHTML = `GS 45`
			container.appendChild(gsText)

			// GS arrow front 3 number

			for (let i = 0; i < 3; i++) {
				const text = document.createElementNS(gs.namespaceURI, 'text')
				text.setAttribute('x', `${28 - (i * 12)}`)
				text.setAttribute('y', `${136}`)
				text.setAttribute('fill', '#ffffff')
				text.setAttribute('id', 'gsFront'+i)
				text.setAttribute('style', 'font-size: 17px')
				if (i === 0) text.innerHTML = `${4}`
				container.appendChild(text)
			}

			const group = document.createElementNS(gs.namespaceURI, 'g')
			group.setAttribute('class', 'mask')

			const gsFrontContent = document.createElementNS(gs.namespaceURI, 'g')
			gsFrontContent.setAttribute('id', 'gsFrontContent')

			group.appendChild(gsFrontContent)

			for (let i = 0; i < 10; i++) {
				const text1 = document.createElementNS(gs.namespaceURI, 'text')
				text1.setAttribute('x', `${38}`)
				text1.setAttribute('y', `${226 - (i * 18)}`)
				text1.setAttribute('fill', '#ffffff')
				text1.setAttribute('class', 'gsT')
				text1.setAttribute('style', 'font-size: 17px')
				text1.innerHTML = `${i}`
				gsFrontContent.appendChild(text1)
			}

			container.appendChild(group)

			
		},

		compassSide (svg) {
			const group = document.createElementNS(svg.namespaceURI, 'g')
			group.setAttribute('id', 'main')
			const circle = document.createElementNS(svg.namespaceURI, 'circle')
			circle.setAttribute('cx', 150)
			circle.setAttribute('cy', 150)
			circle.setAttribute('r', 120)
			circle.setAttribute('stroke', 'transparent')
			circle.setAttribute('fill', '#050A11')
			circle.setAttribute('opacity', 0.4)
			group.appendChild(circle)

			svg.appendChild(group)

			const bigTexts = ['N', '3', '6', 'E', '12', '15', 'S', '21', '24', 'W', '30', '33']
			let count = 0

			for (let i = 0; i < 72; i++) {
				let y2 = 40
				if (i % 2 == 0) {
					y2 = 40
				} else {
					y2 = 35
				}

				const line = document.createElementNS(svg.namespaceURI, 'line')
				line.setAttribute('x1', 150)
				line.setAttribute('y1', 30)
				line.setAttribute('x2', 150)
				line.setAttribute('y2', y2)
				line.setAttribute('stroke', 'white')
				line.setAttribute('stroke-width', '2')
				line.setAttribute( 'transform', 'rotate(' + i * 5 + ', 150, 150)')

				if (i % 6 === 0) {
					const text = bigTexts[count]
					let textCentering
					if (text === 'N' || text === 'W') textCentering = 143
					else textCentering = 150 - text.length * 4
					const text1 = document.createElementNS(svg.namespaceURI, 'text')
					text1.setAttribute('x', `${textCentering}`)
					text1.setAttribute('y', `56`)
					text1.setAttribute('fill', '#ffffff')
					text1.setAttribute('style', `font-size: 15px; font-weight: bold; text-align: middle;`)
					text1.setAttribute( 'transform', 'rotate(' + i * 5 + ', 150, 150)')
					text1.innerHTML = `${bigTexts[count]}`
					count++
					group.appendChild(text1)
				}

				group.appendChild(line)
			}

			const tirangle = document.createElementNS(svg.namespaceURI, 'polygon')
			tirangle.setAttribute('points', '143, 15 156,15 150,30 143,15')
			tirangle.setAttribute('fill', '#FF00FF')
			tirangle.setAttribute('stroke', '#FF00FF')
			svg.appendChild(tirangle)
		}
	}
}
