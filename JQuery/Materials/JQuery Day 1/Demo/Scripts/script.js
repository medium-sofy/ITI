// onload = function(){
//     console.log( $("h1") )
//     console.log( $("h1")[0] )
//     console.log( $("h1").get(0) )
// }

// //jquery 1)
// $(document).ready(function(){
//     console.log( $("h1") )
//     console.log( $("h1")[0] )
//     console.log( $("h1").get(0) )
// })


// //jquery 2)
// $('document').ready(function(){
//     console.log( $("h1") )
//     console.log( $("h1")[0] )
//     console.log( $("h1").get(0) )
// })


//Syntax Suger
//jquery 3)
// $(function(){
//     console.log( $("h1") )
//     console.log( $("h1")[0] )
//     console.log( $("h1").get(0) )
// })

// console.log( $("h1") )
// console.log( $("h1")[0] )
// console.log( $("h1").get(0) )

// $("div h1").css("color", "red");
// $("div h1")[0].style.color = "red";
// $("div h1").get(0).style.color = "red";
// $("div h1").get(1).style.color = "green";
// document.querySelector("div h1").style.color = "red"

// console.log($("div h1"));//
// console.log($("div h1")[0])
// console.log($("div h1").get(0))


// $("div h1").css("color", "red").css("text-align","center");

// document.querySelector("div h1").style.textAlign = "center"

// console.log($("span:contains('Fayoum')"))

// $("span:contains('Fayoum')").css("color","red");
// $("span:not('.d')").css("color","green");

// Filter
// $("ul #i1,ul #i3").css("color","red");
// $("ul li:eq(0),ul li:eq(2)").css("color","red");
// $("ul li").filter(":eq(0),:eq(3)").css("color","red");
// $("ul li").filter(function(){
//     return $(this).attr("id")=="i1"
// }).css("color","red");

//js
// document.getElementById("btn1").addEventListener("click",()=>{
//     document.querySelector("p").style.color = "red"
// })

$("#btn1").click(function(){
    $("p").addClass("hamada");
})

$("#btn2").click(function(){
    $("p").removeClass("hamada");
})

$("#btn3").click(function(){
    $("p").toggleClass("hamada");
})


//search typeof
// console.log(typeof $);//function ==> object
// console.log($.type("hello"));//string
// console.log($.type(10));//number
// console.log($.type($));//function
// console.log($.type($()));//object

// function addClass(){
//     document.querySelector("p").style.color = "red"
// }



//Images
$("#show").click(function() {
    $("#img").show(400);
    // console.log($("#img").);
    // if($("#img").hidden){
    // }else{
    //     alert("please hide first")
    // }
});

$("#hide").click(function() {
    $("#img").hide(400);
});

$("#fadeTo").click(function() {
    $("#img").fadeTo(1000, 0.2)
});

$("#fadeIn").click(function() {
    $("#img").fadeIn(3000)
});

$("#fadeOut").click(function() {
    $("#img").fadeOut(3000)
});

$("#slideToggle").click(function() {
    $("#img").slideToggle(3000);
});

$("#change").click(function() {
    console.log($("#img").attr("src"));
    $("#img").attr("src","../Images/3.jpg");
    // console.log($("#img").attr("src"));
});


