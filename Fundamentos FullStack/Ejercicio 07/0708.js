const readline = require("readline-sync");
function esPalindromo(cadena) {
  //Elimina espacios y convierte en minusculas
  const procesada = cadena.replace(/\s+/g, "").toLowerCase();

  //Compara con su reverso
  const reversa = procesada.split("").reverse().join("");
  return procesada === reversa;
}

//Obterner entrada de usuario
const entrada = readline.question("Introduce un texto:");

//Verificar y mostrar resultado
if (esPalindromo(entrada)) {
  console.log("Si, es palíndromo");
}
//Verificar y mostrar resultado
if (esPalindromo(entrada)) {
  console.log("Es un palíndromo.");
} else {
  console.log("No es un palíndromo.");
}
