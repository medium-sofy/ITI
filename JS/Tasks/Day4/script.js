// function test(){
//     console.log("Hello");
//     return "Hello";
// }


// var x = test();
// console.log(x);//undefined ==> 'Hello'


// function add(x=0,y=0){
//     // x = x || 0;
//     // y = y || 0;
//     return x+y;
// }

// console.log( add(10,15) );//25
// console.log( add(10,15,50) );//25
// console.log( add(10,15,50,120) );//25
// console.log( add(10,15,50,120,230) );//25

// // console.log( add(10) );//NaN ==> x=10, y=undefined ==> 10+undefined=NaN
// // console.log( add() );//NaN ==> x=undefined, y=undefined ==> undefined+undefined=NaN

// console.log( add(10) );//10+0=10
// console.log( add() );//0+0=0


// function add(){
//     // console.log(arguments);
//     // console.log(arguments.length);
//     var result = 0;
//     if(arguments[0]==0 || arguments[0])
//         var resDiv = arguments[0];
//     for(var i=0; i< arguments.length; i++){
//         result = result + arguments[i];
//         if(i>0)
//             resDiv = resDiv / arguments[i];
//     }
//     var assArray = [];
//     assArray["Add"] = result;
//     assArray["Div"] = resDiv;
//     return assArray;
//     // return result;
// }

// console.log( add() );
// console.log( add(0) );
// console.log( add(10,15) );
// console.log( add(10,15,30) );
// console.log( add(10,15,30,45) );



//Customize function recive only 2 parameters
// function add(){
//     if(arguments.length == 2){
//         return arguments[0]+arguments[1];
//     }else{
//         try{
//             throw("Hamada Wrong Call")
//         }catch(err){
//             console.log(err);//message error
//             console.log("7asal Error")
//         }
//         return "Wrong Call"
//     }
// }

// console.log( add(5,10,15) );

// console.log("Hiii");

//tips & tricks ==> hoisting with functions and variables

// function add(x,y){
//     return x+y;
// }

// var x = add(10,15);
// console.log(x);//25

// console.log(myFun);//undefined  ===> undefined() ==> typeError
// console.log( myFun(10,20) );//typeError ==> myFun is not a Function

// var myFun = function(x,y){return x+y;}

// console.log( myFun(10,20) );


// console.log(v);//undefined
// var v = 10;
// console.log(v);//10


// hi();//Hi
// function hi(){
//     console.log("Hi")
// }
// hi();//Hi


///Built-in Objects [Date]
// var today = new Date();
// console.log(today);//Sat Dec 07 2024 10:12:40 GMT+0200 (GMT+02:00)
// console.log(today.getMonth());//11 ===> 0=jan | 11=Dec
// console.log(today.getDay());//6 = sat | 0 = Sun
// console.log(today.getYear());//124 ==> 0=1900 ==> 1900+124 = 2024
// console.log(today.getYear()+1900);//2024
// console.log(today.getFullYear());//2024

// console.log( today.toDateString() );//Sat Dec 07 2024
// console.log( today.toLocaleString('ar-eg') );//


// today.setMonth( today.getMonth() + 2 );

// console.log(today);



/**
 * 1-BOM[Browser Object Model] ==> [window] ===> [navigator - location - history - screen -document]
 * 2-DOM 
 * 3-Built-In Objects ==> []
 * 4-UserDefined Objects
 */


//BOM [window] ==> [Properties - Methods]
// window.console.log("Hi");

// window.alert("Hi")

// window.document.write("<h1>Hi</h1>");

// var x = 10;
// console.log(x);
// console.log(window.x);//

// window.y = 50;
// console.log(y);//50
// console.log(window.y);//50


// function hamada() {
//     console.log("hamada Executed")
// }

// hamada();
// window.hamada();

// window.koko = function(){
//     console.log("KOKO Executed")
// }

// koko();
// window.koko();


// console.log(this);//window {navigator, screen, alert,.....}


// console.log(window);// {navigator, alert,  }



//window Methods
// open();
// window.open();

// var myWin;//undefined

// function openWin(){
//     // open("https://www.google.com/");
//     myWin = open("profile.html",'_blank',"width=300,height=300");
// }

// function closeWin(){
//     if(myWin)
//         myWin.close();
//     else
//         alert("Please Open Window First")
// }


// function move(){
//     myWin.moveTo(50,50);
//     myWin.focus();
// }

// function myMoveBy(){
//     myWin.moveBy(50,50);
//     myWin.focus();
// }


///window Methods [setTimeOut - setInterval]
// setInterval("alert('Hi')",3000)

//-------------------
// function myFun(){
//     alert('Hi')
// }
// console.log(myFun);//function myFun(){alert('Hi')}

// setInterval(myFun,3000)

//-------------------
// var myInterval;//undefined
// function startInt(){
//     myInterval = setInterval(function(){
//         alert("Hii")
//     } ,3000)
// }
// function stopInt(){
//     clearInterval(myInterval);
// }

// function Ahela(){
//     if(!myInterval){//myInterval = undefined = 0
//         myInterval = setInterval(function(){
//             alert("Hii")
//         } ,3000);
//     }else{
//         clearInterval(myInterval);
//         myInterval = 0;
//     }
// }

//call Back
// var myTime = setTimeout(function(){
//     alert('Hi')
// },3000)

// clearTimeout(myTime);

function myFun(){
    setTimeout(function(){
        alert('Hi');
        myFun();
    },3000)
}


// myFun();


