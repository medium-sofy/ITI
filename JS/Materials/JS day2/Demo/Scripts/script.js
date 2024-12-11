// /** built-in functions vs user defined functions */

// // built-in Function
// // var num1 = parseInt(prompt("Enter Number 1"))

// //user Defined Function
// // function done(){
// //     console.log("Hi")
// // }

// // done();

// //Var Scope
// //Hoisting

// // var x = 10;//Global Variabel

// // console.log(x);//10

// // function test(){
// //     // var z = 50;// ===> Local Variable
// //     // console.log(x);//10
// //     // console.log(z);//50  
// //     // console.log(y);//Reference Error: y is not defined

// //     // var x = 50;//Local Variable
// //     // x = 50;//Access Global Variable
// //     // console.log(x);//50
// //     // t = 30;//Local Scope unless if fun called
// //     // console.log(t);//30
// // }

// // console.log(t);//10 ==> Error
// // test();
// // console.log(t);//10 ===> 50 ==> Error ==> 30

// // console.log(z);



// // var x = 10;
// // function test(){
// //     var z = 50;
// //     console.log(z);
// //     x = 60;
// //     t = 30;
// // }

// // console.log(x);//10
// // // console.log(t);//Error
// // test();
// // console.log(x);//60
// // console.log(t);//30





// // Hoisting
// // console.log(x);//undefined
// // var x = 10;
// // console.log(x);//10


// // test();

// // function test(){
// //     x = 50;
// //     console.log(z);//undefined
// //     var z = 10;
// //     console.log(z);//10
// // }

// // test();

// /**
//  * parseInt
//  * parseFloat
//  * Number
//  * console.log
//  */

// //lifecycle js - closure - this scope
// /**
//  * (4)Main Objects
//  *  1-BOM [Browser Object Model]
//  *  2-DOM [Document Object Model] ==> DOM Manibulation
//  *  3-Built-In Objects [10-Objects]
//  *  4-User Defined Objects [Create ur own object]
//  */

// //3- Built-In Objects [10-Objects]
// /**
//  * 1-Number
//  * 2-String   -->
//  * 3-Boolean
//  * 4-RegExp --> Validation
//  * 5-Array
//  * 6-Error
//  * 7-Date
//  * 8-Functions
//  * 9-Math
//  * 10-Object
//  */

// /** Any Object [Properties - Methods] */

// //String Object [Properties(length) - Methods]

// //Create New String Object

// //Constructor Creation
// // var str1 = new String("Hello");
// //Literal Creation
// // var str2 = "Hello";

// // console.log(str1.length);//5
// // console.log(str2.length);//5

// //Methods
// // console.log( str1.charAt(0) )//H
// // console.log( str2.charAt(0) )//H
// // console.log( str2.charAt(5) )//''
// // console.log( str2.indexOf('H') )//0
// // console.log( str2.indexOf('h') )//-1
// // console.log( str2.indexOf('l') )//2
// // console.log( str2.lastIndexOf('l') )//3
// // console.log( str2.indexOf('el') )//1
// // console.log( str2.indexOf('ell') )//1
// // console.log( str2.indexOf('elo') )//-1


// // var str2 = "Hello";
// //split => return Array
// // console.log( str2.split() );// ['Hello']
// // console.log( str2.split("") );// ['H','e','l','l','o']
// // console.log( str2.split("e") );// ['H','llo']

// // var str2 = "Hello Werld";
// // console.log( str2.split(" ") );// ['Hello', 'world']
// // console.log( str2.split("e") );// ['H', 'llo w','rld']
// // console.log( str2.split("e",1) );// ['H']
// // console.log( str2.split("e",2) );// ['H', 'llo w']

// // console.log(str2);

// var str = "Hello WOrld";
// // console.log( str.substr(3,5) );//start index ===> length
// // console.log( str.substring(3,5) );//start index ===> last index
// // console.log(str);

// console.log( str.replace("o","_") );//Hell_ World
// console.log( str.replace(/o/,"_") );//Hell_ World
// console.log( str.replace(/o/g,"_") );//Hell_ WOrld

// console.log( str.replace(/o/ig,"_") );//Hell_ W_rld
// console.log( str.replace(/o/gi,"_") );//Hell_ W_rld

// //  Regular Expression ==>   /patter/flags   ==> g(global) i(ignoreCaseSenstive) m(multibleLines)


// //2-RegExp

// //Literal Creation
// var r1 = /o/gi;
// console.log( str.replace(r1,"_") );//Hell_ W_rld

// //Constructor Creation
// var r2 = new RegExp(/o/,'gi');
// console.log( str.replace(r2,"_") );//Hell_ W_rld



// var userName = prompt("Enter Name");

// var userNameReg = /^[a-zA-Z0-9 ]{3}$/g;// ? ==> 0|1 , * ==> 0|more,  + ==> 1|more

// var tf = userNameReg.test(userName) ;
// console.log( tf );

// if( tf ){
//     alert("Passed")
// }else{
//     alert("Try Again")
// }



// var phoneNum = prompt("Enter Phone Number")

// var phoneNumReg = /^(\+02){1}[0-9]{8}$/

// var tf = phoneNumReg.test(phoneNum);

// if(tf){
//     alert("Passed")
// }else{
//     alert("Try Again")
// }



// var MobileNum = prompt("Enter Mobile Number")

// var MobileNumReg = /^(010|011|015|012){1}[0-9]{8}$/

// var tf = MobileNumReg.test(MobileNum);

// if(tf){
//     alert("Passed")
// }else{
//     alert("Try Again")
// }


var EmailNum = prompt("Enter Email Number")

//Ahmed12@gmail.com
var EmailNumReg = /^[a-zA-Z0-9]+\@{1}(yahoo|hotmail|gmail){1}(.com){1}$/

var tf = EmailNumReg.test(EmailNum);

if(tf){
    alert("Passed")
}else{
    alert("Try Again")
}






