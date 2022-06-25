const carrusel = document.querySelector(".pelicula");
const atras = document.querySelector(".atras");
const adelante = document.querySelector(".adelante");

adelante.addEventListener("click", function () {
  carrusel.scrollLeft != carrusel.scrollWidth
    ? (carrusel.scrollLeft += carrusel.scrollWidth / 4)
    : (carrusel.scrollLeft = carrusel.scrollWidth);

  console.log(carrusel.scrollLeft);
});

atras.addEventListener("click", function () {
  carrusel.scrollLeft != carrusel.scrollWidth
    ? (carrusel.scrollLeft -= carrusel.scrollWidth / 4)
    : (carrusel.scrollLeft = carrusel.scrollWidth);

});
