// why does it fail when we test the same RegEx multiple times?
let inputRegEx = /^[0-9]{1,3}$/g

let radius = +prompt("What is the value of your circle's radius?: ")
let test = inputRegEx.test(radius)

while(!test)
  {
    radius = prompt("Please enter a valid value (3 digits, no spaces)")
    test = inputRegEx.test(radius)
  }

  alert(`Total area of the circle is: ${Math.PI * Math.pow(radius,2)}`)


let inputNum = +prompt("What is the value you want to calculate it's square root?: ")
// why is it failing when re testing it
// test = inputRegEx.test(inputNum)
let sqrtRegEx = /^[0-9]{1,3}$/g
test = sqrtRegEx.test(inputNum)
while(!test)
{
  inputNum = prompt("Please enter a valid value (3 digits, no spaces)")
  test = sqrtRegEx.test(inputNum)
}
alert(`Square root of ${inputNum} is ${Math.sqrt(inputNum)}`)



let cosVal = +prompt("What is the angle you want to calculate it's cos value?: ")
let cosRegEx = /^[0-9]{1,3}$/g
test = cosRegEx.test(inputNum)
while(!test)
{
  inputNum = prompt("Please enter a valid value (3 digits, no spaces)")
  test = cosRegEx.test(inputNum)
}

document.write(`<p>cos ${cosVal}&deg; is ${Math.cos(cosVal * (Math.PI / 180))}</p>`)