// HEADER
const hamburguesa = document.querySelector(".menu__hamburguesa");
const cruz = document.querySelector(".hamburguesa__cruz");
const menuLista = document.querySelector(".menu__lista");

hamburguesa.addEventListener("click", () => {
    hamburguesa.classList.toggle("active");
    cruz.classList.toggle("active");
    menuLista.classList.toggle("active");
}); 

cruz.addEventListener("click", () => {
    hamburguesa.classList.toggle("active");
    cruz.classList.toggle("active");
    menuLista.classList.toggle("active");
}); 

 