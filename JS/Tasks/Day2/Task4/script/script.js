
let nameRegExp = /^[a-zA-Z]{4,}$/g
let phoneRegExp = /^(\+02){1}[0-9]{8}$/g
let mobileRegExp = /^(010|011|012|015){1}[0-9]{8}$/g
let emailRegExp = /^[a-zA-Z0-9]+\@{1}(yahoo|hotmail|gmail){1}(.com){1}$/

let userName = prompt("Enter your name")
let test = nameRegExp.test(userName)
while(!test){
   userName = prompt("Name not valid, try again")
   test = nameRegExp.test(userName)
}

let phone = prompt("Enter your phone number")
let phoneTest = phoneRegExp.test(phone)
while(!phoneTest)
{
   phone = prompt("phone number not valid, try again")
   phoneTest = phoneRegExp.test(phone)
}

let mobile = prompt("Enter your mobile number")
let mobileTest = mobileRegExp.test(mobile)
while(!mobileTest)
   {
      mobile = prompt("mobile number not valid, try again")
      mobileTest = mobileRegExp.test(mobile)
   }
      
      
      let email = prompt("Enter your Email")
let emailTest = emailRegExp.test(email)
while(!emailTest)
{
   email = prompt("email not valid, try again")
   emailTest = emailRegExp.test(email)
}
   
let color = prompt("Choose a color for the output: (Red, Blue, Or Green)")
let colorRegEx = /(red|green|blue)\b/i

let colorRegExTest = colorRegEx.test(color)
while(!colorRegExTest)
{
   let color = prompt("Please enter a valid color from the list: (Red, Green, or Blue")
   colorRegExTest = colorRegEx.test(color)
}
document.write(`<p style='color:${color};'>Welcome dear guest, <span style='color:white'>${userName}</span></p>`);
document.write(`<p style='color:${color};'>Your phone number is: <span style='color:white'>${phone}</span></p>`);
document.write(`<p style='color:${color};'>Your mobile number is: <span style='color:white'>${mobile}</span></p>`);
document.write(`<p style='color:${color};'>Your email is: <span style='color:white'>${email}</span></p>`);
   /*TODO: 
   *Rewatch RegEx part of the lecture record .Done
   *Implement the solution using a while loop and don't proceed until the user enters valid input
   *Make the user choose a color for the output, let him choose between red, blue or green, loop until he enters one of these values
   *
   */ 
   
