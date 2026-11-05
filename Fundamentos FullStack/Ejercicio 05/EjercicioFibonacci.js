// Generar automáticamente los primeros números de la sucesión de Fibonacci //
const cantidad = 10;
const Fibonacci = [1, 1];
for (let i = 2; i < cantidad; i++) {
  Fibonacci.push(Fibonacci[i - 1] + Fibonacci[i - 2]);
}
console.log("Números Fibonacci:", Fibonacci);

// Multiplicar Fibonacci por dos //
const FibonacciPorDos = Fibonacci.map((numero) => numero * 2);
console.log("Fibonacci Multiplicado por dos:", FibonacciPorDos);
