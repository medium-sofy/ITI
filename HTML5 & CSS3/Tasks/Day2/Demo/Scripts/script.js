//#region GeoLocation
// let Extras = {};

// function onSuccess(position){
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     let Screen = document.getElementById("screen");
//     //#region Only Text
//     // document.getElementById("screen").innerHTML = 
//     // `<h4>Latitude: ${lat}</h4> 
//     // <h4>Longitude: ${lon}</h4>`
//     //#endregion
//     //#region Real Map
//     var geoMap = new google.maps.Map(Screen,{center:{lat, lng:lon},zoom:12})
//     //#endregion
// }

// function onError(error){

// }

// document.getElementById("btnGetLoc").addEventListener("click",()=>{

//     navigator.geolocation.getCurrentPosition(onSuccess, onError, Extras);

// })
//#endregion


//#region LocalStorage
// function SaveData(){
//     var username = document.getElementById("name").value; 
//     var userage = document.getElementById("age").value; 
   
//     let user = {name: username, age: userage};//{name:'Ahmed', age:20}
//     localStorage.setItem("userData",JSON.stringify(user))//{userData: {name:'Ahmed', age:20}}
   
//     // localStorage.setItem("name", username);
//     // localStorage.setItem("age", userage);
// }
//#endregion

//#region Canvas
let canvas1 = document.getElementById("canvas1");
let ctx_2d = canvas1.getContext('2d');
// let ctx_3d = canvas1.getContext('3d');
ctx_2d.beginPath();
ctx_2d.moveTo(10,10);
ctx_2d.lineTo(100,100);
ctx_2d.strokeStyle = 'red';
ctx_2d.lineWidth = 5;
ctx_2d.stroke();
ctx_2d.closePath();
//2nd Line
ctx_2d.beginPath();
ctx_2d.moveTo(100,100);
ctx_2d.lineTo(100,70);
ctx_2d.strokeStyle = 'blue';
ctx_2d.lineWidth = 5;
ctx_2d.stroke();
ctx_2d.closePath();

//Rect
ctx_2d.beginPath();
// ctx_2d.rect(150,150, 20, 30);//(x1,y1, dx, dy)
// ctx_2d.rect(100,100, 50, 50);//(x1,y1, dx, dy)
// ctx_2d.stroke();
ctx_2d.strokeRect(150,150, 20, 30);
ctx_2d.strokeRect(100,100, 50, 50);
ctx_2d.closePath();

// Circle ==> arc(center_X, center_Y, R, s_Angle, e_Angle)
ctx_2d.beginPath();
// ctx_2d.moveTo(220,220)
// ctx_2d.arc(50,50, 10, 0, 2*Math.PI);
ctx_2d.arc(220,220, 50, 0, Math.PI);
ctx_2d.lineCap = "round"
ctx_2d.stroke();
ctx_2d.fillStyle="green";
ctx_2d.fill();
ctx_2d.closePath();


//#endregion
