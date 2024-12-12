let inputStr = prompt("Enter a string to determine if it's a palindrome")
let confirmation = confirm("Do you want to consider case sensitivity?")
console.log(inputStr.split('').reverse().join(''))

function checkPalindrome(string)
{
  tempStr = string
  if(confirmation == true)
  {
    return string.split('').reverse().join('') === tempStr ? true : false
  }
  else
  {
    return string.toLowerCase().split('').reverse().join('') === tempStr.toLowerCase() ? true : false
  }
}

function printResult(inputStr)
{
  checkPalindrome(inputStr) ? print("The string is a palindrome") : print("The string is not a palindrome")
}

printResult(inputStr)

function print(input)
{
  console.log(input)
}