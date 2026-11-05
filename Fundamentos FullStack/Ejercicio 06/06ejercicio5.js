const readline = require ('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

rl.question("Introducir una frase: ", (cadena) => {
const numVocales = contarVocales(cadena);
    console.log(`El número de vocales es: ${numVocales}`);
    rl.close();

});

function contarVocales(cadena) {
    let count = 0;
    const vocales = 'aeiouAEIOU';
    
    for (let char of cadena) {
        if (vocales.includes (char)) {
            count++;
        }
    }
return count;
}



