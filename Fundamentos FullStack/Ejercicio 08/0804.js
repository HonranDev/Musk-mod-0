const readlineSync = require("readline-sync");

function sonAnagramas(cad1, cad2) {
  //minúsculas y sin espacios
  cad1 = cad1.toLowerCase().replace(/\s+/g, "");
  cad2 = cad2.toLowerCase().replace(/\s+/g, "");

  if (cad1.length !== cad2.length) {
    return false;
  }

  let mapa = new Map();

  for (let char of cad1) {
    if (mapa.has(char)) {
      mapa.set(char, mapa.get(char) + 1);
    } else {
      mapa.set(char, 1);
    }
  }

  for (let char of cad2) {
    if (!mapa.has(char)) {
      return false;
    }
    mapa.set(char, mapa.get(char) - 1);
    if (mapa.get(char) === 0) {
      mapa.delete(char);
    }
  }

  return mapa.size === 0;
}

// Principio
let cadena1 = readlineSync.question("Introduce una palabra: ");
let cadena2 = readlineSync.question("Introduce otra palabra: ");

if (sonAnagramas(cadena1, cadena2)) {
  console.log("Las palabras son anagramas.");
} else {
  console.log("Las palabras no son anagramas.");
}
