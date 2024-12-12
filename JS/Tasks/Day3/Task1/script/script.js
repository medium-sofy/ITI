let inputRegEx = /^\d{1}\s*\d{1}\s*\d{1}$/g
let numArr

let input = prompt("Enter 3 numbers")
let test = inputRegEx.test(input)

while(!test)
  {
    input = prompt("Please Enter 3 numbers only")
    test = inputRegEx.test(input)
  }
// need to handle splitting input with whitespace
input.includes(' ') ? numArr = input.split(' ')
                    : numArr = input.split('')


console.log(numArr)

let sumResult = calcSum(numArr)
let multiResult = calcMulti(numArr)
let divResult = calcDiv(numArr)

// printFormatted(`sum of the 3 values: ${numArr.join('+')} = ${sumResult}`,"h1","blue" )
// printFormatted(`multiplication of the 3 values: ${numArr.join('*')} = ${multiResult}`,"h1","blue" )
// printFormatted(`division of the 3 values: ${numArr.join('/')} = ${divResult}`,"h1","blue" )

document.write(`<p style='color: red;'>sum of the 3 values:<span style='color: white;'> ${numArr.join('+')} = ${sumResult}</span></p>`)
document.write(`<p style='color: red;'>multiplication of the 3 values: <span style='color: white;'>${numArr.join('*')} = ${multiResult}</span></p>`)
document.write(`<p style='color: red;'>division of the 3 values:<span style='color: white;'> ${numArr.join('/')} = ${divResult}</span></p>`)

function calcSum(arr)
{
  let sum = 0
  arr.forEach((item)=>{
    sum+=parseInt(item)
  })
  return sum
}

function calcMulti(arr)
{
  let result = 1
  arr.forEach((item)=>
    {
      result*=item
  })
  return result
}

function calcDiv(arr)
{
  let result = arr[0]
  for(let i = 1; i< arr.length; i++)
  {
    result = result / arr[i]
  }
  // arr: 4 8 1
  // iteration:  1      |     2
  // result:    4/8     |   0.5 / 1
  return result
}

function printFormatted(input,tag,color)
{
  document.write(`<${tag} style='color: ${color}'><span style='color:white;'>${input}</span></${tag}>`)
}