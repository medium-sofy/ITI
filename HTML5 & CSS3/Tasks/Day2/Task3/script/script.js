/*
 * start with an empty canvas
 * every 500 milliseconds make the line move towards the opposite corner
 * when the position of the x and y values == opposite corner
 * alert that the animation ended
 */

let [x, y] = [0, 0];
let canvasEnd = 300;
let canvas = $("#canvas")[0];
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.strokeStyle = "red";
ctx.lineWidth = 3;

function advance() {
  ctx.lineTo((x += 1), (y += 1));
  console.log(x);
  ctx.stroke();

  if (x == 310) {
    clearInterval(intervalId);
    alert("Animation Ended");
  }
}

let intervalId = setInterval(advance, 10);

