importScripts("../Scripts/Add.js");
onmessage = function(evt){
    // console.log(evt.data);//[50,20]
    let [n1,n2] = evt.data;
    // var result = n1+n2;
    var result = Add(n1, n2);
    postMessage(result); 
}