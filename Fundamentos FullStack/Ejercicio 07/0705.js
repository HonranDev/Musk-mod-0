const readline = require("readline-sync");

function verificarElementosUnicos(arr) {
  const vistos = new Set();
  const repetidos = new Set();

  for (const elem of arr) {
    if (vistos.has(elem)) {
      repetidos.add(elem);
    } else {
      vistos.add(elem);
    }
  }

  if (repetidos.size === 0) {
    console.log("Todos los elementos son únicos.");
  } else {
    console.log(`Los elementos repetidos son ${[...repetidos].join(", ")}`);
  }
}

// Leer entrada del usuario
const entrada = readline.question("Introduce una lista de elementos: ");

// Procesar entrada: Quitar espacios y separar por comas
const elementos = entrada.split(",").map((e) => e.trim());

// Ejecutar función
verificarElementosUnicos(elementos);
