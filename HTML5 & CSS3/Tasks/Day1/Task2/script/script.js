let [red, green, blue] = [0, 0, 0];
let text = $("#header");

function changeRed(element) {
  red = element.value;
  text.css("color", `rgb(${red},${green},${blue})`);
}

function changeGreen(element) {
  green = element.value;
  text.css("color", `rgb(${red},${green},${blue})`);
}

function changeBlue(element) {
  blue = element.value;
  text.css("color", `rgb(${red},${green},${blue})`);
}
