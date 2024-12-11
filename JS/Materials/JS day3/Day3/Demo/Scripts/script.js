// // // /** Main Objects
// // //  * 1-DOM
// // //  * 2-BOM
// // //  * 3-Built-in Objects
// // //  * 4-User Defined
// // //  */

// // // /** Built-in Objects
// // //  * 1- String
// // //  * 2-Number
// // //  * 3-Boolean
// // //  * 4-RegExp
// // //  * 5-Array
// // //  * 6-Error
// // //  * 7-Objects
// // //  * 8-Date
// // //  * 9-Math
// // //  * 10-Function
// // //  */

// // // // Any Object [Properties - Methods]
// // // //Number
// // // //Literal Creation
// // // var x = 10;
// // // //Constructor Creation
// // // var y = new Number(10);

// // // console.log(x)
// // // console.log(y)

// // // console.log( y.valueOf() );

// // // console.log( x.toString() );
// // // console.log( x.toString(2) );
// // // console.log( x.toString(16) );

// // // console.log( x.toLocaleString("ar-eg") );//١٠
// // // console.log(x.toLocaleString("zh-Hans-CN-u-nu-hanidec"));


// // // var x = parseInt(prompt("Enter Number"));
// // // console.log(x);//cancel ===> NaN
// // // console.log( typeof x);//number
// // // console.log( typeof x == 'number');// true

// // // //isFinite()    vs     isNaN()

// // // console.log( isFinite(x) );
// // // console.log( Number.isFinite(x) );


// // // console.log( isFinite('10') )//true
// // // console.log( Number.isFinite('10') )//false


// // //Array

// // //Literal Creation
// // var arr1 = [];
// // var arr2 = [1,2,3];
// // var arr3 = [1,2,3,"Hello", true, function(){}, [] , "", 100];

// // //Constructor Creation
// // var arr4 = new Array();//[]


// // //Dense Array
// // var arr5 = new Array(3);//[,,]

// // var arr6 = new Array("Apple", "Banana", "Orange");//


// // // console.log(arr5.length)
// // // console.log(arr6.length)
// // // console.log( arr5[0] );//undefined
// // // console.log( arr5[1] );//undefined
// // // console.log( arr5[2] );//undefined

// // arr5[0] = "Hello";

// // console.log(arr5);

// // arr5[10] = "Welcome";//// ["Hello", 9 x empty, "Welcome"]
// // console.log(arr5);
// // console.log(arr5.length);//11

// // var arr = [];
// // arr[100]="Hello"

// // console.log(arr.length);//101

// // var arrr = [,,,,];
// // console.log(arrr.length);//4
// // console.log(arrr[0]);//undefined


// // //Immutable VS Mutable
// // var x = 10;
// // var y = x;
// // console.log(y);//10

// // x = 500;

// // console.log(y);//10


// // //Mutable [Refernece Type]
// // var arr1 = [1,2,3];
// // var arr2 = arr1;
// // console.log(arr2);//[1,2,3]

// // arr1[0] = "Hello";

// // console.log(arr2);//["Hello", 2, 3]



// //Deep Coby
// // var arr1 = [1,2,3];
// // var arr2 = [];

// // for(var i=0; i<arr1.length; i++){
// //     arr2[i] = arr1[i];
// // }

// // for(i in arr1){//i index
// //     arr2[i] = arr1[i];
// // }

// // var count = 0;
// // for(i of arr1){//i value
// //     arr2[count] = i;
// //     count++;
// // }

// // console.log(arr1)
// // console.log(arr2)

// // arr1[0] = "Hello";

// // console.log(arr1)
// // console.log(arr2)



// //Methods
// //push(val) ==> add at end
// //pop() ==> remove from end

// //unshift(val) ==> add at start 
// //shift() ==> remove from start 

// //join
// // var arr = [1,2,3];
// // console.log(arr);
// // console.log( arr.join() )
// // console.log( arr.join(":") )
// // console.log( arr.join(":::::") )
// // console.log( arr.join("Hello") )

// // var arr = [1,2,3];
// // var arr2 = [4,5,6];

// // console.log( arr.concat(arr2) )
// // var concatedArray = arr.concat(arr2);

// // console.log(arr);
// // console.log(arr2);
// // console.log(concatedArray)


// var arr = [10,1,5,30,700,9];

// //Ass
// console.log( arr.sort( function(a,b){return a-b} ) );
// //Des
// console.log( arr.sort( function(a,b){return b-a} ) );

// // console.log(arr);



//--------------- Associative Array ---------------
// var assArr = [1,2,3];

//Dot Notaion
// console.log(assArr.length);//3
// console.log(assArr.join("+"));

// //Subscribt Notation
// console.log(assArr['length']);//3
// console.log( assArr['join']("+") )

var assArr = ["Hello", 10, true];
assArr['userName'] = "Ahmed";
assArr['userAge'] = 50;
assArr['hasWork'] = false;
assArr['mobileNumber'] = ["01222546846", "0156874861348"];

// console.log(assArr.length);//0

for(var i = 0; i<assArr.length; i++){
    console.log(assArr[i])
}

// var t = 0;
// do{
//     console.log(assArr[t])
//     t++;
// }while(t<5)

// for(var i in assArr){//i ==> keys
//     console.log(i +": "+ assArr[i] );
// }


// console.log(assArr['userName']);//"Ahmed"






