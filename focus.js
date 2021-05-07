const input = document.querySelector(".input-div");

input.addEventListener("focus", changeColor, true);
input.addEventListener("blur", removeColor, true);

function changeColor(event) {
  event.target.style.background = "rgb(245, 178, 101)";
}

function removeColor(event) {
  event.target.style.background = "";
}
