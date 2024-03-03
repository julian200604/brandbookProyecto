const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
}) /*Con esta función flecha al dar click en abrir el menu se muestra */

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})