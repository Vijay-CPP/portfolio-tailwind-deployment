let darkModeBtn = document.getElementById("dark-mode-btn");
let darkModeBtnHam = document.getElementById("dark-mode-btn-ham");
let body = document.querySelector("body")

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
});

darkModeBtnHam.addEventListener("click", () => {
    body.classList.toggle("dark");
});