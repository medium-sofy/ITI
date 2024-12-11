// var x = 10;

// console.log(x);//10

// setTimeout(function(){
//     console.log("Inside Timer")
// },0);


// console.log("The End");


//BOM [window] ==> [navigator - location - ....]
// console.log(navigator);
// console.log(navigator.appVersion);
// console.log(navigator.language);
// console.log(navigator.userAgent);


// if(/Chrome/g.test(navigator.userAgent)){//chrome
// if(navigator.userAgent.split("Chrome").length>1){//chrome
// if(navigator.userAgent.includes("Chrome")){//chrome
// if(navigator.userAgent.indexOf("Chrome")!=-1){//chrome
//     document.write("Welcome")
// }else{//firefox
//     document.write("Please Use Chrome")
// }




//location
// console.log(location);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.hostname);
// console.log(location.host);
// console.log(location.pathname);
//reload - assign - replace


//history [go - forward - back]



//property ---> search
//location.search


//----------------document--------------------
//properties [bgColor - fgColor - title - cookies - .....]
//Methods [write()xxxxxxxxx]
//Methods [
        //     getElementByID('id')  
        //     getElementsByTagName('tag')
        //     getElementsByClassName('class')
        //     getElementsByName('name')

        //     querySelector('tag')
        //     querySelector('#id')
        //     querySelector('.class')

        //     querySelectorAll('')
        // ]

// onload = function(){
//     document.bgColor = "red";
//     //Code
// }

// document.bgColor = "red";
// document.fgColor = "white";
// document.title = "MAIN";

// console.log( document.getElementById("myH") );

// // document.getElementById("myH").innerText = "<h1>Welcome</h1>"
// document.getElementById("myH").innerHTML = "<h1>Welcome</h1>";
// document.getElementById("in1").value = "Ahmed"
// document.getElementById("in1").style.color = 'red';

// var flag = 0;
// function DarkLightMode(){
//     if(flag==0){
//         document.bgColor = 'black';
//         document.fgColor = 'white';
//         document.getElementById("btn1").value = 'Light';
//         flag = 1;
//     }else{
//         document.bgColor = 'white';
//         document.fgColor = 'black';
//         document.getElementById("btn1").value = 'Dark';
//         flag = 0;
//     }
// }


// console.log(document.getElementById("in1"))



// console.log( document.getElementsByClassName("myClass") );//[]
// document.getElementsByClassName("myClass")[0].style.color = 'red'; 
// document.getElementsByClassName("myClass")[1].style.color = 'red'; 
// document.getElementsByClassName("myClass")[2].style.color = 'red'; 

// var arrLength = document.getElementsByClassName("myClass").length;

// for(var i=0; i<arrLength; i++){
//     document.getElementsByClassName("myClass")[i].style.color = 'red'; 
//     document.getElementsByClassName("myClass")[i].style.backgroundColor = 'yellow'; 
//     document.getElementsByClassName("myClass")[i].style.textAlign = 'center'; 
// }

console.log(document.querySelector("h6"))
console.log(document.querySelector("#myH6"))
console.log(document.querySelector(".myClass"))
console.log(document.querySelectorAll(".myClass"))



//cookies
//user Defined Objects