const boton = document.querySelector("#boton");
const show = document.querySelector("#active");

function showHide() {
  document.querySelector("#active").classList.toggle("active");
  document.querySelector("#active").classList.toggle("active2");
}

document.querySelector("#boton").addEventListener("click", showHide);
