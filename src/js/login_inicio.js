let usuario = document.getElementById("usuario");
let contraseña = document.getElementById("contraseña");
let boton = document.getElementById("boton");

localStorage.setItem("usuario", usuario.value);
localStorage.setItem("contraseña", contraseña.value);

let usuario2 = localStorage.getItem("usuario");
let contraseña2 = localStorage.getItem("contraseña");
