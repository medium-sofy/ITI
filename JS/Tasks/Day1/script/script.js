// let message = prompt("Enter a message to display: ")


let sum = 0 
let input = 0
let condition = true
while(condition)
{
  input = +prompt("Enter values to add: 'Enter 0 to stop, or if the sum exceeds 100'")
  sum += input 
  sum > 100 || input==0 ? condition = false : condition
}

input == 0 ? document.write(`<h1>Program aborted, 0 was entered</h1>`) 
           : document.write(`<h1>The total sum is: ${sum}</h1>`)






// const input = document.querySelector('#sum')
// const output = document.querySelector("#output")
// let sum = 0 
// let condition = true
// while(condition)
//   {
//     let value = input.value 
//     sum += value 
//     sum > 100 || value==0 ? condition = false : condition
//     output.innerHTML = `The sum is: ${sum}`
//     input.value=0
//     }


// for(let i = 1 ; i<=6 ; i++)
// {
//   document.write(`<h${i}>You Entered: "${message}" using an h${i}</h${i}>`)
// }
/*
869387
*/
// console.log(typeof 4)
// let sum

// while(true)
// {
//   let input = +prompt("Enter values to add: ",sum)
//   sum = typeof input === 'number'? sum + input : alert("Please enter a numeric value") 
//   document.write(`<p>The sum is ${sum}</p>`)
// }

// use while 
// exit when input == 0 , or sum > 100
//