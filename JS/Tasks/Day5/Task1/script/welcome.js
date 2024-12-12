let queryString = location.search.replace("?","")
console.log(queryString)

let queryArray = queryString.split('&')
console.log(queryArray)
let assocArr = []
queryArray.forEach((item,i)=>{
  let key = queryArray[i].split("=")[0]
  let val = queryArray[i].split("=")[1].replace(/(\+|\%)/g,' ')
  assocArr[key] = val
})

console.log(assocArr)

// --------- Dom manipulation portion
const greeting = document.querySelector("#greeting")
const info = document.querySelector('#info')
const browser = document.querySelector('#browser')
greeting.innerText = `Hello, ${assocArr['title']} ${assocArr['name']}, welcome to your profile.`
info.innerText = `Here is your info:
    Address: ${assocArr['address']}
    Gender: ${assocArr['gender']}
    E-mail: ${assocArr['email']}
    Mobile: ${assocArr['mobile']}
    `
if(!/Chrome/.test(navigator.userAgent))
{
  browser.innerText = `It looks like you are using a browser other than Chrome,
                      Please use Chrome for the best experience.`
}
    