const readlineSync = require("readline-sync");

function parentesisBalanceados(texto) {
  let stack = [];

  for (let char of texto) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

const texto = readlineSync.question("Introduce un texto: ");

if (parentesisBalanceados(texto)) {
  console.log("Están balanceados");
} else {
  console.log("NO están balanceados");
}
