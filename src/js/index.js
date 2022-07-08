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
});

atras.addEventListener("click", function () {
  carrusel.scrollLeft != carrusel.scrollWidth
    ? (carrusel.scrollLeft -= carrusel.scrollWidth / 4)
    : (carrusel.scrollLeft = carrusel.scrollWidth);

  if (carrusel.scrollLeft <= 0) {
    carrusel.scrollLeft = carrusel.scrollWidth;
  }
});

function nombre() {
  let nombre = localStorage.getItem("usuario");
  let usuario = document.getElementById("usuario");
  usuario.innerText = nombre;
}
nombre();

const ultimas = document.getElementById("pelicula");
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=3e5f0bebd9cfb9a96c31b4a62cb78a30"
)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((imagenes) => {
      let img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500/${imagenes.poster_path}`;
      ultimas.appendChild(img);
    });
  });
