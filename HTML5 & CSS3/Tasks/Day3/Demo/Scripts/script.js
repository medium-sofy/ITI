//#region Canvas
// let canv1 = document.getElementById("canv1");
// let ctx = canv1.getContext("2d");
// ctx.fillText("Hello Everyone!!", 10, 20);
// // ctx.font = "20pt Courier New";
// // ctx.fillText("Hello Everyone!!", 10, 50);
// let textWidth = ctx.measureText("Hello Everyone!!").width;
// // ctx.fillText("Welcome", textWidth+15, 20);
// ctx.strokeStyle = "yellow";
// ctx.strokeText("Welcome", textWidth+15, 20);

// let myImage = new Image();
// myImage.src = "../Images/3.jpg";

// myImage.onload = function(){
//     ctx.drawImage(myImage, 10,10, 100,50)
// }

//createLinearGradient  vs   createRadialGradiant
// let grad1 = ctx.createLinearGradient(50,50,250,250);
// grad1.addColorStop(0,"white");
// grad1.addColorStop(0.2,"blue");
// grad1.addColorStop(0.4,"green");
// grad1.addColorStop(0.6,"white");
// grad1.addColorStop(0.8,"pink");
// grad1.addColorStop(1,"white");

// ctx.fillStyle = grad1
// ctx.fillRect(0,0, canv1.width, canv1.height);

// let grad2 = ctx.createRadialGradient(100,100, 150,  200,200, 10);
// grad2.addColorStop(0,"yellow")
// grad2.addColorStop(0.2,"blue")
// grad2.addColorStop(0.6,"green")
// grad2.addColorStop(1,"black")

// ctx.fillStyle = grad2;
// ctx.arc(150,150, 150, 0, 2*Math.PI);
// ctx.fill()



// let myImage = new Image();
// myImage.src = "../Images/3.jpg";

// myImage.onload = function(){
//     // ctx.drawImage(myImage, 10,10, 100,100);
//     ctx.save();
//     ctx.translate(50,50);//(0,0)
//     ctx.drawImage(myImage, 10,10, 100,100);
//     ctx.restore();
//     ctx.rotate(100);
//     ctx.drawImage(myImage, 10,10, 100,100);
// }
//#endregion

//#region Worker

    //1)Create Worker
    let myWorker = new Worker("../Scripts/worker.js");

    function AddNums(){
        let n1 = +document.getElementById("num1").value;
        let n2 = +document.getElementById("num2").value;
        //2)send Message to worker (n1,n2)
        myWorker.postMessage([n1,n2]);
        //3)listen Event --> res
        myWorker.onmessage = function(response){
            // console.log(response.data);
            let res = response.data;
            document.getElementById("r1").innerHTML += res;
        }
    }

//#endregion

