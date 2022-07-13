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

const btn = document.getElementById("boton2");
const mostrar = document.getElementById("search1");
btn.addEventListener("click", function () {
  mostrar.classList.toggle("ocultar");
  mostrar.classList.toggle("search2");
});

const negra = document.getElementById("barra");

negra.addEventListener("scroll", function () {
  if (negra.scrollTop > 0) {
    negra.classList.add("negra");
  } else {
    negra.classList.remove("negra");
  }
}
);
