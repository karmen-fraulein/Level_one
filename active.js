const active = document.querySelector(".collapse-ul").querySelectorAll("li");
console.log(active)

active.forEach(el => {
    el.addEventListener("click", function(){
        active.forEach(li => li.classList.remove("active"))

        this.classList.add("active")
    })
})