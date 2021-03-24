export default {
	methods: {
		makeCanvas () {
			const gs = document.getElementById('gs')
			const center = document.getElementById('center')

			this.leftSide(gs, 260, 70)
			this.centerSide(center)
		},
		centerSide (centerSvg) {
			const group = document.createElementNS(centerSvg.namespaceURI, 'g')

			const arc = document.createElementNS(centerSvg.namespaceURI, 'path')

			arc.setAttribute('d', 'M 20 140 Q 160 0 300 140')
			arc.setAttribute('stroke', 'white')
			arc.setAttribute('fill', 'transparent')
			arc.setAttribute('stroke-width', '2.4')

			group.appendChild(arc)

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
					e: 'polygon'
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
					children: [
						{
							d: 'M 40 155 Q 160 25 280 155 V 235 H 40 V 155',
							c: '#19C5EC',
							o: '0.5',
							s: 'transparent'
						},
						{
							d: 'M 40 235 V 285 Q 160 415 280 285 V 235',
							c: '#19C533',
							o: '0.5',
							s: 'transparent'
						},
						{
							p: '152,28 160,15 168,28 152,28',
							t: 'transform: translate(0px, 56px)',
							c: 'transparent',
							e: 'polygon'
						},
					]
				},
			]

			for (let i = 0; i < linePoints.length; i++) {
				const item = linePoints[i]
				if (item.type) {
					const groupPoint = document.createElementNS(centerSvg.namespaceURI, item.type)
					groupPoint.setAttribute('id', item.id)
					if (item.children) {
						for (let j = 0; j < item.children.length; j++) {
							const el = item.children[j]
							this.makeSvgElement(centerSvg, el, groupPoint)
						}
					}
					group.appendChild(groupPoint)
				} else {
					this.makeSvgElement(centerSvg, item, group)
				}
			}

			centerSvg.appendChild(group)
		},
		makeSvgElement (centerSvg, item, group) {
			const groupPoint = document.createElementNS(centerSvg.namespaceURI, 'g')
			groupPoint.setAttribute('style', item.t)
			let point
			if (item.e) {
				point = document.createElementNS(centerSvg.namespaceURI, item.e)
			} else {
				point = document.createElementNS(centerSvg.namespaceURI, 'path')
			}
			if (item.p) {
				point.setAttribute('points', item.p)
			}
			if (item.o) {
				point.setAttribute('fill-opacity', item.o)
			}
			point.setAttribute('d', item.d)
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
			point.setAttribute('stroke-width', '2')
			groupPoint.appendChild(point)
			group.appendChild(groupPoint)
		},
		leftSide (gs, height, width) {
			const gsMeter = document.createElementNS(gs.namespaceURI, 'path')
			let m = ''; let m2 = ''
			const part = height / 4
			for (let i = 1; i <= 5; i++) {
				m += `M ${width} ${height - i * part} L 50 ${height - i * part} `
				m2 += ` M ${width} ${height + part / 2 - i * part} L 60 ${height + part / 2 - i * part} `
				const text = document.createElementNS(gs.namespaceURI, 'text')
				text.setAttribute('x', `${30}`)
				text.setAttribute('y', `${height - i * part + 3}`)
				text.setAttribute('fill', '#ffffff')
				text.setAttribute('style', 'font-size: 11px')
				text.innerHTML = `${20 * i}`
				gs.appendChild(text)
			}
			gsMeter.setAttribute('d', m + m2)
			gsMeter.setAttribute('stroke','white')
			gs.appendChild(gsMeter)
			const path = document.createElementNS(gs.namespaceURI, 'path')
			path.setAttribute('d','M 0 120 L 35 120 V 110 H 50 V 122 L 70 130 L 50 137 V 150 H 35 V 140 H 0')
			path.setAttribute('stroke','white')
			path.setAttribute('fill','#050A11')
			gs.appendChild(path)

			const text = document.createElementNS(gs.namespaceURI, 'text')
			text.setAttribute('x', `${26}`)
			text.setAttribute('y', `${136}`)
			text.setAttribute('fill', '#ffffff')
			text.setAttribute('style', 'font-size: 17px')
			text.innerHTML = `${4}`
			gs.appendChild(text)

			const group = document.createElementNS(gs.namespaceURI, 'g')

			group.setAttribute('class', 'mask')

			const text1 = document.createElementNS(gs.namespaceURI, 'text')
			text1.setAttribute('x', `${38}`)
			text1.setAttribute('y', `${136}`)
			text1.setAttribute('fill', '#ffffff')
			text1.setAttribute('style', 'font-size: 17px')
			text1.innerHTML = `${5}`
			group.appendChild(text1)

			const text2 = document.createElementNS(gs.namespaceURI, 'text')
			text2.setAttribute('x', `${38}`)
			text2.setAttribute('y', `${118}`)
			text2.setAttribute('fill', '#ffffff')
			text2.setAttribute('style', 'font-size: 17px')
			text2.innerHTML = `${6}`
			group.appendChild(text2)

			const text3 = document.createElementNS(gs.namespaceURI, 'text')
			text3.setAttribute('x', `${38}`)
			text3.setAttribute('y', `${154}`)
			text3.setAttribute('fill', '#ffffff')
			text3.setAttribute('style', 'font-size: 17px')
			text3.innerHTML = `${4}`
			group.appendChild(text3)

			gs.appendChild(group)
		}
	}
}
