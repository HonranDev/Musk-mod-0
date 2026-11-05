const readlineSync = require("readline-sync");
readlineSync.setDefaultOptions({});

// Bubble sort
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// Tamaño fijo
const size = 100000;

// Genera array aleatorio
const arr = Array.from({ length: size }, () =>
  Math.floor(Math.random() * size)
);

// Medir tiempo con Date.now()
const start = Date.now();
bubbleSort(arr);
const end = Date.now();

// Convertir a segundos
const elapsedSeconds = (end - start) / 1000;

console.log(
  `El algoritmo bubble sort ha tardado ${elapsedSeconds.toFixed(
    0
  )} segundos en ordenar ${size} elementos`
);
