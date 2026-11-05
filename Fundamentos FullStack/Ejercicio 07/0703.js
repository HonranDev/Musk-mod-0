const readline = require("readline-sync");
function calcularCirculo(radio) {
  const Pi = Math.PI;
  const area = Pi * Math.pow(radio, 2); //formula del Área
  const circunferencia = 2 * Pi * radio; //formula circunferencia
  console.log(`\nPara un circulo con radio ${radio}:`);
  console.log(`El Àrea del Círculo es ${area.toFixed(13)}`);
  console.log(`La Circunferencia es ${circunferencia.toFixed(14)}`);
}
//Introducir el Radio
const input = readline.question("Introduce el radio:");
const radio = parseFloat(input);

//Valída que sea número positivo

if (isNaN(radio) || radio <= 0) {
  console.log("Introduce número válido y mayor que cero.");
} else {
  calcularCirculo(radio);
}
