let username = $('#username')
let email = $('#email')
let usernameError = $('.usernameError')
let emailError = $('.emailError')

// #1
// attach submit listener on form
// check for individual form elements
// display error accordingly
//
// $('#form').on('submit',function(event){
//   if(!form.checkValidity())
//     {
//       event.preventDefault()
//       console.log('input invalid')

//     }
// })

// function validate()
// {
  
// }

// #2
// attach input event on individual inputs
// display specific error depending on validation type
username.on('input',()=>{
  console.log(username[0].validity)
  if(usernameError) usernameError.text('')
  
  if(username[0].validity.valueMissing)
    {
      console.log(username[0].validity)
    usernameError.text('Please enter any input')
    }
  if( username[0].validity.patternMismatch)
    {
      usernameError.text('Please enter alphanumeric characters only between 4 and 10 characters')
    }
})

email.on('input',()=>{
  console.log(email[0].validity)
  if(emailError) emailError.text('')
  
  if(email[0].validity.valueMissing)
    {
      console.log(email[0].validity)
    emailError.text('Please enter any input')
    }
  if( email[0].validity.patternMismatch)
    {
      emailError.text('Please enter a valid Email address')
    }
})