const hamBtn = document.querySelector("#ham-btn");
const hamMenu = document.querySelector("#ham-menu");
hamMenu.classList.add("animate__animated")

hamBtn.addEventListener('click', () => {
    if (hamMenu.classList.contains("hidden")) {
        hamMenu.classList.remove("hidden")
        hamMenu.classList.add("animate__slideInRight")
        setTimeout(() => {
            hamMenu.classList.remove("animate__slideInRight")
        }, 1000)
    } else {
        hamMenu.classList.add("animate__slideOutRight")
        setTimeout(() => {
            hamMenu.classList.remove("animate__slideOutRight")
            hamMenu.classList.add("hidden")
        }, 1000)
    }
})

hamMenu.childNodes.forEach(element => {
    element.addEventListener("click", () => {
        hamMenu.classList.add("animate__slideOutRight")
        setTimeout(() => {
            hamMenu.classList.remove("animate__slideOutRight")
            hamMenu.classList.add("hidden")
        }, 1000)
    });
});


let skillsDiv = document.querySelector(".skills-div");
let chArr = skillsDiv.children;

// Function to add animations
function addAnimations(entries, observer) {
    skillsDiv.classList.remove("hidden")
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let delay = 0;
            for (let i = 0; i < chArr.length; i++) {
                chArr[i].style.animationDelay = `${delay}s`;
                chArr[i].classList.add("animate__animated", "animate__fadeInUp");
                delay += 0.1; // Adjust the delay time as needed
            }
            observer.unobserve(entry.target);
        }
    });
}

// Creating an Intersection Observer
let options = {
    threshold: 0.2 // Adjust threshold as needed
};

let observer = new IntersectionObserver(addAnimations, options);
observer.observe(skillsDiv);
