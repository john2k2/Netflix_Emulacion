function validarUsuario(usuario) {
  if (usuario.length < 5) {
    alert("El usuario debe tener al menos 5 caracteres");
    return false;
  } else {
    return true;
  }
}

function validarContraseña(contraseña) {
  if (contraseña.length < 5) {
    alert("La contraseña debe tener al menos 5 caracteres");
    return false;
  } else {
    return true;
  }
}

function validarContraseñaConfirmada(contraseña, contraseñaConfirmada) {
  if (contraseña !== contraseñaConfirmada) {
    alert("Las contraseñas no coinciden");
    return false;
  } else {
    return true;
  }
}

function validarEmail(email) {
  if (email.indexOf("@") === -1) {
    alert("El email no es válido");
    return false;
  } else {
    return true;
  }
}

function validarNombre(nombre) {
  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres");
    return false;
  } else {
    return true;
  }
}

function validarApellido(apellido) {
  if (apellido.length < 3) {
    alert("El apellido debe tener al menos 3 caracteres");
    return false;
  } else {
    return true;
  }
}

// Language: javascript

// Path: src\js\registration.js
let login = document.getElementById("form");

login.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  //Obtenemos el elemento desde el cual se disparó el evento
  let formulario = e.target;
  //Obtengo el valor del primero hijo <input type="text">
  let usuario = formulario.children[0].value;
  let contraseña = formulario.children[1].value;
  let contraseñaConfirmada = formulario.children[2].value;
  let email = formulario.children[3].value;
  let nombre = formulario.children[4].value;
  let apellido = formulario.children[5].value;

  localStorage.setItem("usuario", usuario);
  localStorage.setItem("contraseña", contraseña);
  localStorage.setItem("contraseñaConfirmada", contraseñaConfirmada);
  localStorage.setItem("email", email);
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);

  if (
    validarUsuario(usuario) &&
    validarContraseña(contraseña) &&
    validarContraseñaConfirmada(contraseña, contraseñaConfirmada) &&
    validarEmail(email) &&
    validarNombre(nombre) &&
    validarApellido(apellido)
  ) {
    alert("Registro exitoso");
    window.location.href = "./login.html";
  }
}
