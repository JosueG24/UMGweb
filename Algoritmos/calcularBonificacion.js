// Funcion calcular bonificacion

function calcularBonificacion() {
  let monto = parseFloat(prompt("Ingresa el monto de ventas del mes:"));// obtenemos monto vendido del usuario
  
  if (isNaN(monto) || monto < 0) { // validamos monto 
    console.log("Monto inválido.");
    return;
  }
  
  let porcentaje;
  
  if (monto < 1000) {  // asignamos el % que requiere segun el monto
    porcentaje = 0;
  } else if (monto < 5000) {
    porcentaje = 3;
  } else if (monto < 20000) {
    porcentaje = 5;
  } else {
    porcentaje = 8;
  }
  
  let bonificacion = monto * (porcentaje / 100); 
  
  // imprimimos respuesta
  console.log(`Monto de ventas: Q${monto}`);
  console.log(`Porcentaje de bonificación: ${porcentaje}%`);
  console.log(`Bonificación obtenida: Q${bonificacion.toFixed(2)}`);
}