// var step = +document.getElementById("r1").step;

// function startRange(){
//     var val = +document.getElementById("r1").value;
//     document.getElementById("r1").value = val+step
// }

// document.querySelector("p[data-myAttr='a']").addEventListener('click',()=>{
//     alert("Hi")
// })

var myVideo = document.getElementById("v1");
// console.log(myVideo.duration)

myVideo.onloadeddata = function(){
    console.log(myVideo.duration)
}
function playVid(){
    myVideo.play();
    // myVideo.playbackRate = 5;//0-16 ==> default 1
    // myVideo.playbackRate = 1;//0-16
    // myVideo.playbackRate = 0.5;//0-16
}

function pauseVid(){
    myVideo.pause();
}

function rateVideo(element, evt){
    // console.log(element);
    // console.log(evt);
    // console.log( document.querySelector("#rateRange").value );
    // myVideo.playbackRate = element.value;
    myVideo.playbackRate = evt.target.value;
}

//Toggle
function muteUnmute(){
    myVideo.muted = !myVideo.muted;
}


//volume ==> 0-1

function volumeVideo(element){
    // console.log(element.value);
    myVideo.volume = element.value;
}

//EventListtener ==> ontimeupdate = ()=>{code}
myVideo.ontimeupdate = function(){
    console.log( myVideo.currentTime );
}

