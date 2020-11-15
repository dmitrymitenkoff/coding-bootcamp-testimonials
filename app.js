const next = document.querySelector(".next");
const tanya = document.querySelector(".tanya");
const john = document.querySelector(".john");
const mainImg = document.querySelector(".main-image");

next.addEventListener("click", () => {
    tanya.classList.toggle("hide");
    john.classList.toggle("hide");
 
});

const previous = document.querySelector(".previous");

previous.addEventListener("click", () => {
    tanya.classList.toggle("hide");
    john.classList.toggle("hide");
});

