let login = document.getElementById("form");

login.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  //Obtenemos el elemento desde el cual se disparó el evento
  let formulario = e.target;
  //Obtengo el valor del primero hijo <input type="text">
  let usuario = formulario.children[0].value;
  //Obtengo el valor del segundo hijo <input type="password">
  let contraseña = formulario.children[1].value;
  //Obtengo el valor del tercer hijo <input type="submit">
  let boton = formulario.children[2].value;

  if (
    localStorage.getItem("usuario") === usuario &&
    localStorage.getItem("contraseña") === contraseña
  ) {
    //Redireccionamos a la pagina principal
    window.location.href = "./index.html";
  } else if (
    localStorage.getItem("usuario") !== usuario ||
    localStorage.getItem("contraseña") !== contraseña
  ) {
    Swal.fire("Error", "Usuario o Contraseña Incorrectos", "error");
  } else {
    Swal.fire("Error", "No has iniciado sesion", "error");
  }
}

