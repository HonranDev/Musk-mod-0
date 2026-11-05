const readline = require("readline-sync");

function generarMatrizCuadrada(n) {
  const matriz = [];
  for (let i = 0; i < n; i++) {
    const fila = [];
    for (let j = 0; j < n; j++) {
      fila.push(i * j);
    }
    matriz.push(fila);
  }
  return matriz;
}

// Leer número desde consola
const numero = parseInt(readline.question("Ingresa un número: "), 10);

if (isNaN(numero) || numero <= 0) {
  console.log("Ingrese número entero positivo.");
} else {
  const matriz = generarMatrizCuadrada(numero);

  // Corchete inicial pegado
  process.stdout.write("[[");
  matriz.forEach((fila, index) => {
    process.stdout.write(fila.join(", ") + "]"); // Cierre de fila

    // Si no es la última fila, añadir salto y corchete de apertura para la siguiente fila
    if (index < matriz.length - 1) {
      process.stdout.write("\n [");
    }
  });
  // Corchete final pegado
  process.stdout.write("]\n");
}
