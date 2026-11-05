const readline = require("readline-sync");

// Función que devuelve los elementos que están en array1 pero no en array2
function diferenciaArrays(arr1, arr2) {
  return arr1.filter((num) => !arr2.includes(num));
}
// Pide los dos arrays
let entrada1 = readline.question("Array 1: ");
let entrada2 = readline.question("Array 2: ");

// Cadenas en arrays de números
let array1 = entrada1.split(",").map((num) => Number(num.trim()));
let array2 = entrada2.split(",").map((num) => Number(num.trim()));

let resultado = diferenciaArrays(array1, array2);

console.log("La diferencia de ambos conjuntos es:", resultado);
