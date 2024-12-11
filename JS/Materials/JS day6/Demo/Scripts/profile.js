// var cookies = document.cookie;


// var cookiesArray = cookies.split("; ");//["name=Ahmed", "age=22", "email=ahmed@gmail.com"]

// var assArray = [];

// for(var i = 0; i< cookiesArray.length; i++){
//     var key = cookiesArray[i].split("=")[0]
//     var val = cookiesArray[i].split("=")[1]
//     assArray[key] = val;
// }

// var assArray = GetAllCookies();

// document.getElementById("Name").innerHTML = "Welcome ya "+assArray['name'];
// document.getElementById("Age").innerHTML = "Age: "+assArray['age'];
// document.getElementById("Email").innerHTML = "Email: "+assArray['email'];




document.getElementById("Name").innerHTML = "Welcome ya "+GetCookie('name');
document.getElementById("Age").innerHTML = "Age: "+GetCookie('age');
document.getElementById("Email").innerHTML = "Email: "+GetCookie('email');
