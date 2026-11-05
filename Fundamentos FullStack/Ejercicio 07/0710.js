const readline = require("readline-sync");

//Función que traspone la matriz
function transponerMatriz(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const transpuesta = [];

  for (let i = 0; i < columnas; i++) {
    transpuesta[i] = [];
    for (let j = 0; j < filas; j++) {
      transpuesta[i][j] = matriz[j][i];
    }
  }

  return transpuesta;
}

// Leer entrada de matriz
const entrada = readline.question(
  "Matriz de Entrada (ej: [ [0,1,2], [3,4,5], [6,7,8] ]): "
);

let matriz;
try {
  matriz = JSON.parse(entrada);
} catch (e) {
  console.error("Formato inválido.");
  process.exit(1);
}

const resultado = transponerMatriz(matriz);

// salida de matriz
console.log("Matriz transpuesta:");
console.log(
  "[ " +
    resultado.map((fila) => "[" + fila.join(", ") + "]").join(",\n  ") +
    " ]"
);
