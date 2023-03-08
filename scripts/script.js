const hamBtn = document.querySelector("#ham-btn");
const hamMenu = document.querySelector("#ham-menu");

hamBtn.addEventListener('click', () => {
    hamMenu.classList.toggle("hidden");
})
