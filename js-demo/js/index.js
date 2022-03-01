//SELECTEURS
// document.querySelector("h1").style.background = "yellow";
const question = document.querySelector(".click-event");
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const reponse = document.getElementById('reponse');
let mouse = document.getElementById("mousemove");

question.addEventListener("click", () => {
    question.classList.toggle("question-click");
});


btn1.addEventListener("click", () => {
    reponse.classList.toggle("show-reponse");
    reponse.style.background = "green";
});

btn2.addEventListener("click", () => {
    reponse.classList.toggle("show-reponse");
    reponse.style.background = "red";
});


window.addEventListener('mousemove', (e) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
});

window.addEventListener('mousedown', (e) => {
    mouse.style.height = "50px";
    mouse.style.width = "50px";
});

window.addEventListener('mouseup', (e) => {
    mouse.style.height = "25px";
    mouse.style.width = "25px";
});