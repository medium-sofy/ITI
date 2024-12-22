let canvas = $("#canvas")[0];
let ctx = canvas.getContext("2d");

let grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
grad.addColorStop(0, "rgb(71, 198, 245)");
grad.addColorStop(0.5, "white");
grad.addColorStop(0.5, "rgb(21, 161, 49)");
grad.addColorStop(1, "white");
ctx.fillStyle = grad;
ctx.fillRect(0, 0, canvas.width, canvas.height);


let lineGrad = ctx.createLinearGradient(100,100,100,230)
lineGrad.addColorStop(0,'black')
lineGrad.addColorStop(1,'white')
ctx.lineWidth=3
ctx.beginPath()
ctx.strokeStyle= lineGrad
ctx.moveTo(100,180)
ctx.lineTo(100,100)
ctx.lineTo(200,100)
ctx.lineTo(200,180)
ctx.fill()
ctx.stroke()