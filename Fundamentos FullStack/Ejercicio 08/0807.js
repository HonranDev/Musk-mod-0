const readlineSync = require("readline-sync");
readlineSync.setDefaultOptions({});

// Implementación de Quicksort
function quicksort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Tamaño del array
const size = 100000;

// Generar array aleatorio
const arr = Array.from({ length: size }, () =>
  Math.floor(Math.random() * size)
);

// Medir tiempo
const start = Date.now();
const sorted = quicksort(arr);
const end = Date.now();

const elapsedSeconds = (end - start) / 1000;

console.log(
  `El algoritmo quicksort ha tardado ${elapsedSeconds} segundos en ordenar 100000 elementos.`
);
