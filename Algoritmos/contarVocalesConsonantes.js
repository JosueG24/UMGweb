// Funcion para identificar vocales y consonantes

function contarVocalesConsonantes() {
  let entrada = prompt("Ingresa exactamente 15 letras (sin espacios):").toLowerCase(); // obtenemos la info

  // Validamos que no haya numeros ni caracteres diferentes
  for (let i = 0; i < entrada.length; i++) {
    if (entrada[i] >= '0' && entrada[i] <= '9') {
      console.log("Error: solo puedes ingresar letras");
      return;
    }
  }

  // validamos que se haya ingresadfo 15 caracteres
  if (entrada.length !== 15) {
    console.log("Debes ingresar exactamente 15 letras.");
    return;
  }

  let vocales = 0;
  let consonantes = 0;
  const listaVocales = "aeiouáéíóú"; // identificamos vocales

  for (let i = 0; i < entrada.length; i++) {
    let letra = entrada[i];
    if (listaVocales.includes(letra)) {
      vocales++; // + vocales
    } else if (letra >= 'a' && letra <= 'z') {
      consonantes++; //  + consonantes
    }
  }

  console.log(`Letras ingresadas: ${entrada}`);
  console.log(`Vocales: ${vocales}`);
  console.log(`Consonantes: ${consonantes}`);
}