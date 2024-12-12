// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementsByName

// document.querySelector
// document.querySelectorAll

// console.log(document.forms)//[]
// console.log(document.forms[0])//[]
// console.log(document.forms['f1'])//[]

// function clickMe() {
//     document.getElementById("name").value = "Clicked"
// }

// var flag = 0
// function keyDown(){
//     if(flag==0){
//         document.getElementById("name").value = "";
//         flag = 1;
//     }
// }

// function keyDown(){
//     console.log("Down")
// }
// function keyUp(){
//     console.log("Up")
// }
// function changeNow(){
//     console.log("Changed")
// }
// function inputChangeOnSpot(){
//     console.log("Input Changed Now")
// }

// function startNow() {
//   /** Session Cookie */
//   document.cookie = "userName=Ahmed";
//   document.cookie = "userAge=20";

//   /** Persistant Cookie */
//   //Create New Date
//   var today = new Date();
//   today.setMonth(today.getMonth() + 2);
//   document.cookie = "userPhone=01512345678;expires=" + today;
// }


// function addCookiesNow(){
//     var userName = document.getElementById("userName").value;
//     var userAge = document.getElementById("userAge").value;
//     var userEmail = document.getElementById("userEmail").value;

//     //session cookie
//     document.cookie = "name="+userName;
//     document.cookie = "age="+userAge;
//     // createCookie("name", userName);

//     //persistant Cookie
//     var today = new Date();
//     today.setMonth(today.getMonth() + 2);
//     document.cookie = "email="+userEmail+";expires="+today;
//     // createCookie("email", userEmail, 2);
// }

// function addCookiesNow(){
//     var userName = document.getElementById("userName").value;
//     var userAge = document.getElementById("userAge").value;
//     var userEmail = document.getElementById("userEmail").value;
//     //session cookie
//     createCookie("name", userName);
//     createCookie("age", userAge);
//     //persistant Cookie
//     createCookie("email", userEmail, 2);
// }

/**
 * User Defined Object [Custom Object] [Ur Own Object]
 * 
 * Any Object --> [Properties - Methods]
 * 
 * Any Object [Literal Creation - Constructor Creation]
 */

//Literal Creation
// var obj1 = {};

// //Constructor Creation
// var obj2 = new Object();



// /// Dot Notation
// obj2.userName = "Ahmed";

// /// Subscribt Notation
// obj1['userName'] = "Ahmed";

// console.log(obj1);//{userName: 'Ahmed'}
// console.log(obj2);//{userName: 'Ahmed'}
// console.log(obj1.userName);//Ahmed
// console.log(obj2.userName);//Ahmed
// console.log(obj1['userName']);//Ahmed
// console.log(obj2['userName']);//Ahmed


// obj1.age = 20;
// obj1.email = "Ahmed@gmail.com";
// obj1.address = "123 st.";
// obj1.userInfo = function(){
//     return "Hello ya "+obj1.userName
// };


// console.log(obj1);
// console.log(obj1.userInfo());


//3)
var obj1 = {
    name:"Ahmed", 
    age: 20,
    address: "123 st",
    userInfo: function(){
        return "Hello ya "+obj1.name+" & Age = "+ obj1.age;
    }
}

obj1.email = "Ahmed@gmail.com";
obj1['phone'] = "01512345678";

console.log(obj1);



var alaa = {'Name':'Aly'}
var obj2 = new Object({'Name':'Aly'});
console.log(alaa);
console.log(obj2);