const readlineSync = require("readline-sync");

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const numero = readlineSync.questionInt("Introduce un número: ");

if (esPrimo(numero)) {
  console.log(`${numero} es primo`);
} else {
  console.log(`${numero} NO es primo`);
}
