const hamBtn = document.querySelector("#ham-btn");
const hamMenu = document.querySelector("#ham-menu");
const exp = document.querySelector("#dark-btn-list");

hamBtn.addEventListener('click', () => {
    hamMenu.classList.toggle("hidden");
})

hamMenu.childNodes.forEach(element => {
    element.addEventListener("click", () => {
        if (element != exp)
            hamMenu.classList.toggle("hidden");
    });
});