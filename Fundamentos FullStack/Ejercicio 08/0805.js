const readlineSync = require("readline-sync");

function invertirPalabra(palabra) {
  let stack = [];

  for (let i = 0; i < palabra.length; i++) {
    stack.push(palabra[i]);
  }

  let palabraInvertida = "";
  while (stack.length > 0) {
    palabraInvertida += stack.pop();
  }

  return palabraInvertida;
}

// Pedir palabra al usuario
const entrada = readlineSync.question("Introduce una palabra: ");
const resultado = invertirPalabra(entrada);

console.log("La palabra invertida es:", resultado);
