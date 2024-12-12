// this is script.js, which handles registration form submission
function addCookies()
{
  const name = document.querySelector('#name').value
  const age = document.querySelector('#age').value
  const gender = document.querySelector('input[name=gender]:checked').value
  const color = document.querySelector('#color').value

  let today = new Date()
  today.setMonth(today.getMonth() + 2)
  setCookie('name',name,today)
  setCookie('age',age,today)
  setCookie('gender',gender,today)
  setCookie('color',color,today)
  location.assign('profile.html')
  // countVisits()
}
