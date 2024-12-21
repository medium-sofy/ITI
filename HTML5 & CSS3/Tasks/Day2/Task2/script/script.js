let canvas = $('#canvas')[0]
let ctx = canvas.getContext('2d')

ctx.beginPath()

ctx.moveTo(150,0)
ctx.lineTo(150,150)
ctx.lineTo(75,150)
ctx.stroke()
ctx.fillStyle='red'
ctx.fill()

ctx.font = '16px monospace'
ctx.fillStyle = 'black'
ctx.fillText('a',110,170)
ctx.fillText('b',160,90)
ctx.fillText('c',85,90)