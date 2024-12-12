let inputRegEx = /^\d{1}\s*\d{1}\s*\d{1}\s*\d{1}\s*\d{1}$/g

let numArr

let input = prompt("Enter 5 numbers to sort")
let test = inputRegEx.test(input)

while(!test)
  {
    input = prompt("Please Enter 5 numbers")
    test = inputRegEx.test(input)
  }
// need to handle splitting input with whitespace
input.includes(' ') ? numArr = input.split(' ')
                    : numArr = input.split('')

console.log(numArr)

let ascArr = [...numArr].sort((a,b)=>{
  return a-b
})

let descArr = [...numArr].sort((a,b)=>{
  return b-a
})

document.write(`<p style='color: red;'>You've entered the values of:<span style='color: white;'> ${numArr.join()}</span></p>`)
document.write(`<p style='color: red;'>Your values after being sorted in descending order:<span style='color: white;'> ${descArr.join()}</span></p>`)
document.write(`<p style='color: red;'>Your values after being sorted in ascending order:<span style='color: white;'> ${ascArr.join()}</span></p>`)
