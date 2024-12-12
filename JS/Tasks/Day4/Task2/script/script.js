// create floating child window
// type each letter of a string at an interval
// close the window after seconds of finishing
const input = document.querySelector('#input')
let myWin;
let intervalId;
let charIndex = 0;

function openWin() {
  myWin = open("html/window.html", "_blank", "width=300,height=300");
  typeMessage("This is my message", myWin);
}

function typeMessage(input, win) {
  const charArr = input.split('');

  intervalId = setInterval(() => {
    if (charIndex < charArr.length) {
      win.document.write(charArr[charIndex]);
      charIndex++;
    } else {
      clearInterval(intervalId);
      myWin.close()
    }
  }, 500);
}



// my Implementation:
// let myWin
// let intervalId 
// function openWin()
// {
//   myWin = open("html/window.html","_blank","width=300,height=300")
// // call text displaying function
// }

// function typeMessage(input,win=undefined)
// {
//   /*
//     split the string to an array of chars
//     loop over each char in an interval and display
//   */
//     let charArr = input.split('')
//     // charArr.forEach((char) => {
//     //   win.document.write(char)
//     // });
// console.log(charArr[0])
//   for(let i =0; i< input.length; i++)
//   {
//     setInterval(()=>{win.document.write(charArr[i])},2000)
//   }
//       // charArr.forEach((char) => {
//       //   setInterval(()=>{win.document.write(char)},2000)
//       // })
// }

// // intervalId = setInterval(()=>{typeMessage('Hello there',window)}, 1000)
// typeMessage("hello there is",window)