let inputStr = prompt("Enter a string of words")

function longestWord(inputStr)
{
  let longest = '0'
  console.log(inputStr.split(' ')[3])
  // split the string on whitespace
  // loop over each array item, call arr.length method on each item,
  // let largest = 0 
  // if inputStr[i].length > largest.length : largest = inputStr[i]
  inputStr.split(' ').forEach((word) => {
    if(word.length > longest.length)
      longest = word
  });
  
  return longest
}

document.write("<h3>The entered string is: </h3> <p>"+inputStr+"</p>")
document.write("<h3>The Longest word of the string is: </h3> <p>"+longestWord(inputStr)+"</p>")
function split(string, seperator)
{
  return string.split(seperator)
}

// this is a javascript string demo