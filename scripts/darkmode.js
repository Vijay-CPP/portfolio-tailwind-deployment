let darkModeBtns = document.querySelectorAll(".dark-mode-btn");
let body = document.querySelector("body")

darkModeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        body.classList.toggle("dark");
    });
})

