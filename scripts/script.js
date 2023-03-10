const hamBtn = document.querySelector("#ham-btn");
const hamMenu = document.querySelector("#ham-menu");

hamBtn.addEventListener('click', () => {
    hamMenu.classList.toggle("hidden");
})

hamMenu.childNodes.forEach(element => {
    element.addEventListener("click", () => {
            hamMenu.classList.toggle("hidden");
    });
});