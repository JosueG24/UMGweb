// Documentacion
// convertir un numero del 1 al 10 a numero romano
// necesitamos obtener un valor numerico entre 1 y 10
// Validar que el dato recibido sea valido
// y devolver su equivalente en numero romano
// La forma mas facil es creando una coleccion ordenada de numeros romanos.

function numeroARomano() {
  const romanos = ["I","II","III","IV","V","VI","VII","VIII","IX","X"]; // coleccion de romanos
  
  let num = parseInt(prompt("Ingresa un número del 1 al 10:")); // obtenemos dato del usuario
  
  if (num < 1 || num > 10 || isNaN(num)) { // validamos info recibida
    console.log("Número inválido. Debe ser entre 1 y 10.");
  } else {
    console.log(`El número ${num} en romano es: ${romanos[num - 1]}`); // entregamos respuesta
  }
}