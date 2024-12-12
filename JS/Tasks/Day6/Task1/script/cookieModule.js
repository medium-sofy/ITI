// This is cookieModule.js which contains helper functions related to setting cookies and counting the number of visits

function allCookieList() {
  let cookies = document.cookie.split("; ");
  let assocArr = [];

  for (let i = 0; i < cookies.length; i++) {
    let key = cookies[i].split("=")[0];
    let val = cookies[i].split("=")[1];
    assocArr[key] = val;
  }
  return assocArr;
}

// function getCookie(key) {
//   let assocArr = allCookieList();
//   return assocArr[key];
// }

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
  }
  return undefined;
}
function setCookie(key, value = undefined, numberOfMonths) {
  if (numberOfMonths) {
    let today = new Date();
    today.setMonth(today.getMonth() + numberOfMonths);
    document.cookie = key + "=" + value + ";expires=" + today;
  } else {
    document.cookie = key + "=" + value;
  }
}

function deleteCookie(key) {
  setCookie(key, "", -1);
}

function hasCookie(key) {
  let myCookie = allCookieList();
  return myCookie[key] ? true : false;
}

function countVisits() {
  let visits = 1;
  if (hasCookie("visits")) {
    visits = parseInt(getCookie("visits"));
  }
  visits++
  setCookie("visits", visits, 2);
  console.log(
    // `number of visits in cookie: ${assocArr["visits"]}, number of visits in variable: ${visits}`
  );
}
