function changeBackground() {
  if (window.scrollY > window.innerHeight / 2) {
    document.body.classList.add("change-background");
  } else {
    document.body.classList.remove("change-background");
  }
}

window.addEventListener("scroll", changeBackground);
