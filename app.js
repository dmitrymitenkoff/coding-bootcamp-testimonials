const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const tanya = document.querySelector(".tanya");
const john = document.querySelector(".john");
const tanyaImg = document.querySelector(".tanya-img");
const johnImg = document.querySelector(".john-img");

next.addEventListener("click", () => {
    tanya.classList.toggle("hide");
    tanyaImg.classList.toggle("hide");
    john.classList.toggle("hide");
    johnImg.classList.toggle("hide");
});



previous.addEventListener("click", () => {
    tanya.classList.toggle("hide");
    tanyaImg.classList.toggle("hide");
    john.classList.toggle("hide");
    johnImg.classList.toggle("hide");
});

