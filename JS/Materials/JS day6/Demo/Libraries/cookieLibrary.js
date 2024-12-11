//Add New Cookie [Session-Persistant]
function createCookie(key, value, numberOfMonths){
    if(numberOfMonths){//any number -> true value -> Persistant Cookie
        var today = new Date();
        today.setMonth( today.getMonth()+numberOfMonths );
        document.cookie = key+"="+value+";expires="+today;
    }else{//undefined -> falsy value -> session cookie
        document.cookie = key+"="+value;
    }
}

//get All Cookies
function GetAllCookies(){
    var cookies = document.cookie.split("; ");//
    var assArray = [];
    for(var i=0; i< cookies.length; i++){
        var key = cookies[i].split("=")[0]
        var val = cookies[i].split("=")[1]
        assArray[key] = val;
    }
    return assArray;
}

//get Cookie
function GetCookie(key){
    var assArray = GetAllCookies();
    return assArray[key];
}

//Delete Cookie
function DeleteCookie(key){
    createCookie(key, "", -20);
}


//has Cookie ==> true|false

