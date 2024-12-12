// create parent window: done
// that opens a flying child window : done
// child window should always be on top view ==> focus 
// moves up and down within boundaries of user screen ==> use an interval that calls myWin.move by
// parent should contain a button to stop child window movement ==> clear interval

let myWin
let counter = 0
let direction = 'down'
let currentPosition = 0
let intervalId

function openWin()
{
  myWin = open("html/window.html","_blank","width=300,height=300")
}

function move() {
  myWin.focus()
  // Calculate the new position based on current position and direction
  let jumpAmount = window.innerHeight / 5
  let newPosition = currentPosition + (direction === 'down' ? jumpAmount : -jumpAmount); // Adjust the step size as needed

  // Check if the window has reached the boundaries
  if (newPosition >= window.innerHeight) {
    direction = 'up';
    // newPosition = window.innerHeight - jumpAmount; // Adjust the boundary position
  } else if (newPosition <= 0) {
    direction = 'down';
    // newPosition = jumpAmount; // Adjust the boundary position
  }

  myWin.moveTo(0, newPosition);
  currentPosition = newPosition;

  // Keep the window focused
  myWin.focus();
}

function startMovement() {
  intervalId = setInterval(move, 1000); // Adjust the interval time as needed
}

function toggleMovement()
{
  if(!intervalId)
  {
    intervalId = setInterval(move, 1000);
  }
  else 
  {
    myWin.focus()
    clearInterval(intervalId)
    intervalId = 0
  }

}
function stopMovement() {
  myWin.focus()
  clearInterval(intervalId);
}

// My version
// function move()
// {
//   let screenHeight = window.innerHeight
//   let positions = [screenHeight / 4, 2*screenHeight / 4, 3*screenHeight / 4, 4*screenHeight / 4]

//     if(direction == 'down' && counter < 3)
//       {
//         myWin.moveTo(0,positions[counter])
//         counter++
//       }
//       else if(direction == 'up' && counter >=0)
//       {
//         myWin.moveTo(0,positions(counter))
//         counter--
//       }
//   // if(jump != screenHeight)
//   // {
//   //   myWin.moveBy(0,jump+=jumpAmount)
//   // }
//   // else
//   // {
//   //   myWin.moveBy(0, jump-=jumpAmount)
//   // }
//   myWin.focus()
//   console.log("window height is: "+screenHeight)
//   console.log("counter value is: "+counter)
//   console.log("position value is: "+positions[counter])

//   counter == (0 || 1 || 2) ? direction = 'down' : direction = 'up'
// }
console.log(window.innerHeight)

// get window.innerheight ,
// divide by a fixed number of jumps, i.e 5 , ex: 1000 / 5 = 200
// move the window by this portion : 200px
// if window reaches screen height position: 1000px
// start moving the window by a negative amount
// if the window reaches start position : 0 start incrementing
