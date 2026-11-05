const readline = require("readline-sync");

function calcularLongitudCircunferencia(radio) {
  if (radio <= 0) {
    console.log("El radio debe ser positivo."); // Muestra error si no cumple.
    return;
  }

  const longitud = 2 * Math.PI * radio;
  console.log(`La circunferencia es: ${longitud.toFixed(14)}`); // Muestra el resultado
}

// introducir datos principales
const radio = readline.questionFloat("Introduce el radio: ");
calcularLongitudCircunferencia(radio); // imprime salida resultado
