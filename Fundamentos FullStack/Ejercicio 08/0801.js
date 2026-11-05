const readline = require("readline-sync");

// Función que encuentra palabras repetidas en un texto
function palabrasRepetidas(texto) {
  const limpio = texto.toLowerCase().replace(/[.,!?¿¡]/g, "");

  const palabras = limpio.split(/\s+/);

  // contador para saber cuantas veces aparece la palabra
  const contador = {};

  for (const palabra of palabras) {
    if (contador[palabra]) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  }

  // Filtrado solo palabras repetidas
  const repetidas = [];
  for (const palabra in contador) {
    if (contador[palabra] > 1) {
      repetidas.push(palabra); // 👈 Solo guardamos la palabra
    }
  }

  return repetidas;
}

const entrada = readline.question("Introduce un texto: ");
const resultado = palabrasRepetidas(entrada);

if (resultado.length === 0) {
  console.log("No hay palabras repetidas.");
} else {
  console.log("Se repiten las siguientes palabras:");
  console.log(resultado.join(", "));
}
