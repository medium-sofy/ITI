// To-Do: add fading in/out when clicking on different sections

$("#aboutBtn").click(() => {
  $("#content")
    .html(
      `<div id="about">
      <p>Story about snow man</p>
    </div>
  `,
    )
    .show();

  // $('#about').fadeToggle(500)
});

$("#gallery").hide();
$("#galleryBtn").click(() => {
  $("#content")
    .html(
      `
    <div id="gallery">
        <img src="./Task Materials/./left.png" id="left" alt="">
        <img src="./Task Materials/1.jpg" id="slide" alt="">
        <img src="./Task Materials/right.png" id="right" alt="">
    </div>`,
    )
    .show();
});
let imageIndex = 1;

$("#content").on("click", "#left", () => {
  imageIndex = imageIndex > 1 ? imageIndex - 1 : 1; // Loop back to 5
  $("#slide").attr("src", `./Task Materials/${imageIndex}.jpg`);
});

$("#content").on("click", "#right", () => {
  imageIndex = imageIndex < 8 ? imageIndex + 1 : 8; // Loop back to 5
  $("#slide").attr("src", `./Task Materials/${imageIndex}.jpg`);
});

// Wouldn't work because the #left element wasn't yet added
// to the dom, instead, we use:
// $("#content").on("click", "#left", ...):
// This attaches the click handler to #content and specifies that it should only trigger
// when clicks originate from elements matching the #left selector within #content.
// This works even if #left is added dynamically later.
// $("#left").click(() => {
//   $("#slide").attr(
//     "src",
//     `./Task Materials/${(imageIndex = imageIndex > 1 ? imageIndex - 1 : 1)}`,
//   );
// });

$("#servicesBtn").click(() => {
  $("#content").html(
    `<div id="services">
        <div class='service'>Service #1</div>
        <div class='service'>Service #2</div>
        <div class='service'>Service #3</div>
    </div>
    `,
  ).slideToggle();
  

  // $('#services .service').slideToggle(500)
  // console.log($('#services .service').slideToggle(500))
});

// To-Do: implement complaints section

$("#complaintsBtn").click(() => {
  $("#content")
    .html(
      `
      <div id='complaints'>
          <p id='error'></p>
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" />


          <label for="email">E-mail:</label>
          <input type="text" name="email" id="email" />

          <label for="mobile">Mobile:</label>
          <input type="text" name="mobile" id="mobile" />

            <label for="complaint">Complaint</label>
          <textarea name="complaint" id="complaint" rows="5" cols="20"></textarea>
          <button id='sendBtn'>Send</button>
      </div>
    `,
    )
    .show();
});

let userName;
let email;
let mobile;
let complaint;
let nameRegExp = /^[a-zA-Z\u00C0-\u017F\s-]{4,50}$/i;
let mobileRegExp = /^01[0-9]{9}$/g;
let emailRegExp = /^[a-zA-Z0-9]+\@{1}(yahoo|hotmail|gmail){1}(.com){1}$/;
let complaintRegExp = /^.{50,250}$/;

let test;

// use event delegation, same as with gallery component
$("#content").on("click", "#sendBtn", () => {
  let errors = [];
  userName = $("#name").val();
  if (!nameRegExp.test(userName)) {
    errors.push("Name is invalid (at least 4 letters).");
  }

  email = $("#email").val();
  if (!emailRegExp.test(email)) {
    errors.push("Email is invalid (e.g., user@gmail.com).");
  }

  mobile = $("#mobile").val();
  if (!mobileRegExp.test(mobile)) {
    errors.push("Mobile is invalid (Egyptian mobile number).");
  }

  complaint = $("#complaint").val();
  if (!complaintRegExp.test(complaint)) {
    errors.push("Complaint must be between 50 and 250 characters.");
  }

  if (errors.length > 0) {
    let errorString = errors.join("<br>");
    $("#error").html(errorString);
  } else {
    $("#error").html("");
    $("#content").html(
      `
        <div id="complaintPreview">
            <p>Your complaint is: <span>${complaint}</span> </p>
            <p>Your name is: <span>${userName}</span></p>
            <p>Your E-mail is: <span>${email}</span></p>
            <p>Your mobile is: <span>${mobile}</span></p>
            <button id="backBtn">Back to edit</button>
        </div>
        `,
    );
  }
});

$("#content").on("click", "#backBtn", () => {
  $("#content").html(
    `
      <div id='complaints'>

          <label for="name">Name:</label>
          <input value=${userName} type="text" name="name" id="name" />


          <label for="email">E-mail:</label>
          <input value=${email} type="text" name="email" id="email" />

          <label for="mobile">Mobile:</label>
          <input value=${mobile} type="text" name="mobile" id="mobile" />

            <label for="complaint">Complaint</label>
          <textarea name="complaint" id="complaint" rows="5" cols="20">${complaint}</textarea>
          <button id='sendBtn'>Send</button>
      </div>
    `,
  );
});
