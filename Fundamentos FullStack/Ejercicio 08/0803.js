const readlineSync = require("readline-sync");

// Función que recibe una cadena y devuelve un Map con la frecuencia
function frecuenciaCaracteres(cadena) {
  const mapa = new Map();

  for (let char of cadena) {
    if (mapa.has(char)) {
      mapa.set(char, mapa.get(char) + 1);
    } else {
      mapa.set(char, 1);
    }
  }

  return mapa;
}

const input = readlineSync.question("Introduce un texto: ");
const resultado = frecuenciaCaracteres(input);

// Mostrar resultados en formato Map { ... }
let salida = "Map { ";
for (let [caracter, frecuencia] of resultado) {
  salida += `'${caracter}' => ${frecuencia}, `;
}
salida = salida.replace(/, $/, ""); // quitar última coma
salida += " }";

console.log(salida);
