const rl = require("readline-sync");

const entrada = rl.question("Escribe un numero:");
const numero = parseFloat(entrada);

if (isNaN(numero)) {
  console.log("No es un numero");
} else {
  if (numero % 2 === 0) {
    console.log("El numero" + numero + "es Par");
  } else {
    console.log("El numero" + numero + "es Impar");
  }
  if (numero >= 0) {
    console.log("El numero" + numero + "es Positivo");
  } else {
    console.log("El numero" + numero + "es Negativo");
  }
}
