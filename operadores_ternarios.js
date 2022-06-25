//ejemplo 1

// const producto ={
//     nombre: 'Monitor 20 pulgadas',
//     precio: 300,
//     marca : 'LG',
//     disponible: 1
// }

// //declaramos y asignamos condicionalmente

// const stock = producto.disponible ? 'Disponible' : 'No disponible';




// && es AND

// const carrito =[]

// if (carrito.length === 0) {
//     console.log('El carrito esta vacio');
// }

// //operador and

// carrito.length > 0 && console.log('El carrito no esta vacio');



// const usuario = {
//     nombre: 'Juan',
//     edad: 20,
// }

// const registro = usuario.edad >= 18 && new Date();


// OR o || 
//operador 1 || operador 2
//devuelve operador 2 : 0, '', null, undefined, false

const usuario = {
    nombre: 'Juan',
    edad: 20,
}
const usuario2 = null;
console.log( usuario || "el usuario no existe");