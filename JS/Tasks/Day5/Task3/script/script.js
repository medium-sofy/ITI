let red = "marble3.jpg";
let brown = "marble1.jpg";
let marblesPath = "/tasks/taskResources/marbels/";
const marbles = document.querySelectorAll("img");
marbles.forEach((img) => {
  img.addEventListener("mouseover", () => {
    stop();
  });
  img.addEventListener("mouseleave", () => {
    start();
  });
});

let intervalId;
let interval = 1000
let index = 0;

function cycle() {
  if (index < 5) marbles[index].src = marblesPath + red;
  if (index > 0) marbles[index - 1].src = marblesPath + brown;
  index++;

  if (index == 6) {
    index = 0;
  }
}
function start() {
  intervalId = setInterval(cycle, interval);
}
function stop() {
  clearInterval(intervalId);
}

// function cycle()
// {
//   if(index==3)
//   {
//     marbles[index+1].src='/tasks/taskResources/marbels/marble1.jpg'
//   }
//   // if(index < marbles.length - 2)
//   // {
//   //   marbles[index].src='/tasks/taskResources/marbels/marble1.jpg'
//   //   marbles[index+1].src='/tasks/taskResources/marbels/marble3.jpg'
//   //   index++
//   // }
//   // else
//   // {
//   //   marbles[index].src='/tasks/taskResources/marbels/marble1.jpg'
//   //   marbles[index+1].src='/tasks/taskResources/marbels/marble3.jpg'
//   // }
//   marbles.forEach((item,index)=>{
//     item.src='/tasks/taskResources/marbels/marble1.jpg'
//     item.src='/tasks/taskResources/marbels/marble3.jpg'
//   })
//   if(index==3)
//   {

//   }
// console.log('index is:',index, 'marbles length is; ', marbles.length)
// }
