// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// document.getElementById("name").innerHTML += name;
// document.getElementById("age").innerHTML += age;

// console.log(localStorage.getItem("userData"));

// console.log(localStorage.getItem("userData"));

let data = JSON.parse(localStorage.getItem("userData"));
// console.log(data);
document.getElementById("name").innerHTML += data.name;
document.getElementById("age").innerHTML += data.age;