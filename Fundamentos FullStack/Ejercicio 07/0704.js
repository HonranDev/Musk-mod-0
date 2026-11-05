const readline = require("readline-sync");
function calcularSumaYMedia(numeros) {
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const media = suma / numeros.length;
  console.log(`\nLa Suma es ${suma}`);
  console.log(`La Media Aritmética es ${media.toFixed(2)}`);
}
//solicita entrada de usuario
const entrada = readline.question(
  "Introduce una lista de números (ej:4,-1,1.5):"
);

//Dividir por coma y limpiar espacios
const partes = entrada.split(",").map((str) => str.trim());

//convertir a números
const numeros = partes.map((str) => Number(str));

//validar que todos los numeros sean validos.
const todosSonNumeros = numeros.every((num) => !isNaN(num));
if (!todosSonNumeros || numeros.length === 0) {
  console.log("Error: Introduce solo números validos separados por comas.");
} else {
  calcularSumaYMedia(numeros);
}
