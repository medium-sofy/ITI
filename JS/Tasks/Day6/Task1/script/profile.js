// This is profile.js which reads the data from persisted cookies and displays a message to the user containing his name and number of visits, the problem is that the number of visits stays stuck at '1' no matter how many times the user refreshes the page
window.addEventListener('load',()=>{
  countVisits()
 console.log(getCookie('visits'))
})
let cookies = document.cookie.split("; ");
let assocArr = [];
const maleAvatar = "../task-description/TasksResource/M.jpg";
const femaleAvatar = "../task-description/TasksResource/F.jpg";

const avatar = document.querySelector("#avatar");
const greeting = document.querySelector("#greeting");
avatar.src = getCookie("gender") == "male" ? maleAvatar : femaleAvatar;
for (let i = 0; i < cookies.length; i++) {
  let key = cookies[i].split("=")[0];
  let val = cookies[i].split("=")[1];
  assocArr[key] = val;
}
if(!assocArr['visits'])
{
  // setCookie('visits',1,2)
}
greeting.innerHTML = `Welcome <span style='color:${assocArr["color"]}'>${
  assocArr["name"]
}</span>, you have visited this site <span style='color:${assocArr["color"]}'>${
  getCookie('visits')
}</span> ${assocArr["visits"] == 1 ? "time" : "times"} `;

console.log(assocArr)
console.log(cookies)
