const readline = require("readline-sync");

function generarMatrizCuadrada(N) {
  const matriz = [];
  let contador = 1;
  for (let i = 0; i < N; i++) {
    const fila = [];
    for (let j = 0; j < N; j++) {
      fila.push(contador++);
    }
    matriz.push(fila);
  }
  return matriz;
}

const N = parseInt(
  readline.question("Introduce el tamaño de la matriz cuadrada: "),
  10
);

if (isNaN(N) || N <= 0) {
  console.log("Ingresa un número entero positivo válido.");
} else {
  const matriz = generarMatrizCuadrada(N);
  console.log("[ [ " + matriz[0].join(", ") + " ],");
  for (let i = 1; i < matriz.length - 1; i++) {
    console.log("  [ " + matriz[i].join(", ") + " ],");
  }
  if (matriz.length > 1) {
    console.log("  [ " + matriz[matriz.length - 1].join(", ") + " ] ]");
  } else {
    console.log(" ]");
  }
}
