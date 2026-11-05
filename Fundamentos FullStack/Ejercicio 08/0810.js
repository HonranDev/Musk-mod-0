const readlineSync = require("readline-sync");

function esSecuenciaValida(cadena) {
  const stack = [];
  const pares = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of cadena) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== pares[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Pedir al usuario
const entrada = readlineSync.question("Introduce una secuencia: ");

if (esSecuenciaValida(entrada)) {
  console.log("Secuencia Correcta");
} else {
  console.log("Secuencia Incorrecta");
}
