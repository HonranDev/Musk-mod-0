const readline = require("readline-sync");

function calcularAreaCirculo(radio) {
  if (radio <= 0) {
    return "El radio debe ser un número positivo.";
  }
  const area = Math.PI * Math.pow(radio, 2);
  return `El área del círculo es: ${area.toFixed(13)}.`;
}

// Pedir radio al usuario
const radio = readline.questionFloat("Introduce el radio: ");
console.log(calcularAreaCirculo(radio));
