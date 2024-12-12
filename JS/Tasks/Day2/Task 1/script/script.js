// input a string through a prompt
// print the number of occurences of a specific character entered 
// by the user in another prompt

let inputStr = prompt("Enter a String")
let uniqueChar = prompt("Enter a character to count it's occurrences")
let counter = 0

inputStr.split('').forEach((char) => {
  if(char.toLowerCase() == uniqueChar.toLowerCase())
   { 
    counter++
   }
});

document.write("<h3>The number of occurrences of the character are: " + counter+"</h3>")
//-------------------------------------
// function countChar(string, uniqueChar)
// {
//   let counter= 0
//   for(let i = 0; i< string.length; i++)
//   {
//     if(string.split('')[i].toLowerCase() === uniqueChar.toLowerCase())
//     {
//       counter++
//     }
//   }
//   return counter
// }

// console.log("The occurences of the character are: "+countChar(inputStr, uniqueChar))
// function countOccurrences(string, char) {
//   const regex = new RegExp(char, "g");
//   return string.match(regex)?.length || 0;
// }

// // const text = "Hello, World!";
// // const charToCount = "l";
// const count = countOccurrences(inputStr.toLowerCase(), uniqueChar.toLowerCase());
// console.log(count); // Output: 3