// // document.write('Welcome');
// // document.write('<h1>Welcome</h1>');
// // document.write('<h2>Welcome</h2>');

// // function test(){
// //     alert('h1 clicked');
// // }

// /**
//  * Non-Primative Data Type [object]
//  * array
//  * object
//  * function
//  */

// /** Primative DataTypes
//  * 1-number
//  * 2-string
//  * 3-boolean
//  * ---Special Primative DataType
//  * 4-undefined
//  * 5-null
//  * ----ES6----
//  * 6-bigInt
//  * 7-Symbol
//  */

// //How to Define Variables at JS [Loosely Data Type]
// var x = 10.2;
// console.log(x);
// console.log( typeof(x) );//number [float-int-double-.....]
// x = 50;
// console.log(x);
// x = "Welcome"
// console.log(x);
// console.log( typeof(x) );//string [string - char]



// var s = "Hello";
// s = true;

// var c = 'o';
// console.log( typeof(c) );//string
// c = "Hello";
// c = 15;

// var b = true;
// console.log(b);//true
// console.log( typeof(b) );//boolean
// b = false;
// b = 10;
// b = "Hello"



// //undefined ===> Default Value at JS
// // var z;
// var z = undefined;
// console.log( z );//undefined     value
// console.log( typeof(z) );//'undefined'     DataType

// //null
// var n = null;
// console.log(n);//null      value
// console.log( typeof(n) );//object      value



//unary (-)
// var x = 10;
// console.log( -x );

//unary Increment (++) ==> x++ | ++x ==> x = x + 1
// var x = 10;

// var y = x;//10
// x = x + 1;//11

// var y = ++x;//x = x + 1 ====> var y = x
// var y = x++;//  var y = x;  ===> x = x + 1
// console.log(x);//11
// console.log(y);//11  --   10

// var x = 10;//number
// var y = '10';//string

// console.log(x == y);
// console.log(x === y);

//  !=   !==

// var x = 50;
// var y = 11;

// console.log( !y==10 );//ture ==> false

// console.log(x>3 && y==10)//false
// console.log(x>3 || y==10)//true

// if(x>3 && y==10){
//     //Code
// }else{

// }


// var x = 50;
//Ternary Operator
// if(x==5){
//     console.log("5555")
// }else{
//     console.log("Not 5")
// }

// (x==5)?console.log("5555"):console.log("Not 5")

// console.log( 3<2 );//false
// //Coersion
// console.log( 3<2<1 );//true 
// //  3<2 ==> false ==> false<1 ==> 0<1  ==> true

// //boolean ==> number ===> string
// var x = 10
// console.log(x == '10');//true

// console.log( 3+10+'5' )//135   ==> 18  ==> 66
// console.log( 'Moaz'+5+3 )//1053  ==> 


// console.log( 100 - "5" - "25");//70
// console.log( "Moaz" - 5 - 25);//70


// Falsy Values At JS 
//[ false - 0 - '' - null - undefined - NaN ]

// console.log( !!false )
// console.log( !!0 )
// console.log( !!'' )
// console.log( !!null )
// console.log( !!undefined )
// console.log( !!NaN )
// console.log( !!"Hello" );//true

// var x;//undefined
// if(x){

// }else{
//     //Here
// }

//

// var x = 10;

// switch(x){
//     case 10:
//         //Code
//     break;
//     case 5:
//         //Code
//     break;
// }


/** 3 messages send to User  */

//alert ==> to inform user about any thing u want 
// alert("Hello")

//prompt ==> take data from user
// var userName = prompt("Enter Name") 
// console.log(userName);

// var num1 = parseInt( prompt("Enter Num1") )
// var num2 = parseInt( prompt("Enter Num2") )

// var num1 = parseFloat( prompt("Enter Num1") )
// var num2 = parseFloat( prompt("Enter Num2") )

// var num1 = Number( prompt("Enter Num1") )
// var num2 = Number( prompt("Enter Num2") )


// var num1 = +prompt("Enter Num1");
// var num2 = +prompt("Enter Num2");

// alert( num1 + num2 );
// alert( num1 * num2 );



//confirm ==> 
// var con = confirm("Do you want to Exit");
// console.log(con)

// if(con){//ok ==> true
//     alert("Bye Bye :(")
// }else{//cancel ==> false
//     alert("u still here with us :) ")
// }



