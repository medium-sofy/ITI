/*
name
phone
ticket no.
train no.
seat no.
date
*/
// 2 ways to solve this
// #1 
// use input element without a form
// and call saveInfo on submit which stores data 
// in local storage and redirects the user to 
// dashboard.html for dashboard.js to fire
// which reads userData from localStorage and 
// displays user info
// 
// #2 
// Use a form element and let the action be "html/dashboard.html"
// this will redirect to dashboard.html directly without calling saveData(
// take user input from query string inside dashboard.js using location.search
// set localStorage and display user data directly from there

// the cons of the first implementation is that the pattern
// property of input element only work when they are inside a form element
//
// you can add an itermediary html file with a js script
// that the form targets, takes info and stores it in local storage
// displays confirmation message and redirects to dashboard page
// which reads from localStorage
// )
function saveInfo() {
  let name = $("#name").val();
  let phone = $("#phone").val();
  let ticket = $("#ticket").val();
  let train = $("#train").val();
  let seat = $("#seat").val();
  let date = $("#date").val();
  
  let userData = { name, phone, ticket, train, seat, date };
  
  localStorage.setItem('userData',JSON.stringify(userData));
  location.assign('html/dashboard.html')
}

// $(function () {
//   console.log($("#date").val());
// });
