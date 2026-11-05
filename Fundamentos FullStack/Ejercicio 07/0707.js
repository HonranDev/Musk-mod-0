const readline = require("readline-sync");

function textoAMatriz(texto) {
  const elementos = texto.match(/\w+|[^\s\v]/g);
  const ancho = 5;
  const matriz = [];
  for (let i = 0; i < elementos.length; i += ancho) {
    matriz.push(elementos.slice(i, i + ancho));
  }
  return matriz;
}

const input = readline.question("Introduce un texto: ");
const resultado = textoAMatriz(input);

// Generar salida con el formato exacto
let salidaFormateada = "[ ";

for (let i = 0; i < resultado.length; i++) {
  const fila = resultado[i];
  salidaFormateada += "[" + fila.map((el) => `"${el}"`).join(", ");

  if (i < resultado.length - 1) {
    salidaFormateada += "],\n  ";
  } else {
    salidaFormateada += "] ";
  }
}

salidaFormateada += "]";

console.log(salidaFormateada);
