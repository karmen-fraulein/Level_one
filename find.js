const submit = document.querySelector(".sub-button");
const link = document.querySelector(".searching-list-item");

submit.addEventListener("click", findYourLink);
let data2 = [];
function findYourLink() {
  let input = document.querySelector(".main-input").value;
  fetch(` https://itunes.apple.com/search?term=${input}`)
    .then((response) => response.json())
    .then((data) => {
      renderHTML(data);
      data2 = data;
    });
}
