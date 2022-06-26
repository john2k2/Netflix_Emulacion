const carrusel = document.querySelector(".pelicula");
const atras = document.querySelector(".atras");
const adelante = document.querySelector(".adelante");

adelante.addEventListener("click", function () {
  carrusel.scrollLeft != carrusel.scrollWidth
    ? (carrusel.scrollLeft += carrusel.scrollWidth / 5)
    : (carrusel.scrollLeft = carrusel.scrollWidth);

  if (carrusel.scrollLeft >= carrusel.offsetWidth * 5) {
    carrusel.scrollLeft = 0;
  }
  console.log(carrusel.scrollLeft);
  console.log(carrusel.scrollWidth);
});

atras.addEventListener("click", function () {
  carrusel.scrollLeft != carrusel.scrollWidth
    ? (carrusel.scrollLeft -= carrusel.scrollWidth / 4)
    : (carrusel.scrollLeft = carrusel.scrollWidth);

  if (carrusel.scrollLeft <= 0) {
    carrusel.scrollLeft = carrusel.scrollWidth;
  }
});
