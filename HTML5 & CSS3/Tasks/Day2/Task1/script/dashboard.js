$(function (){
  let data = JSON.parse(localStorage.getItem('userData'))
  console.log(data)
  $('#greeting').text(`Greeting, ${data.name}, here is a summary of your train reservation`)
  $('#name').text(`Name: ${data.name}`)
  $('#phone').text(`Phone: ${data.phone}`)
  $('#ticket').text(`Ticket: ${data.ticket}`)
  $('#train').text(`Train: ${data.train}`)
  $('#seat').text(`Seat: ${data.seat}`)
  $('#date').text(`Date: ${data.date}`)

})

