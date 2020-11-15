const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

function toggleChange() {
    const tanya = document.querySelector(".tanya").classList.toggle("hide");
    const john = document.querySelector(".john").classList.toggle("hide");
    const tanyaImg = document.querySelector(".tanya-img").classList.toggle("hide");
    const johnImg = document.querySelector(".john-img").classList.toggle("hide");  
}

next.addEventListener("click", toggleChange);
previous.addEventListener("click", toggleChange);


