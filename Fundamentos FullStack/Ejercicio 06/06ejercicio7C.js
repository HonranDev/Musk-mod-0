const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introducir altura del triángulo: ", (numero) => {
    let altura = parseInt(numero);                             // Convierte la entrada a número

    if (!isNaN(altura) && altura > 0) {                        //número válido
        for (let i = 1; i <= altura; i++) {
            let espacios = " ".repeat(altura - i);            
            let asteriscos = "*".repeat(2 * i - 1); 
            console.log(espacios + asteriscos); 
        }
    } else {
        console.log("Introduce un número válido.");
    }

    rl.close();
});