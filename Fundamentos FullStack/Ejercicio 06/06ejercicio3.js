const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout

});
rl.question ("Introducir Numero:", (numero) => {
    const num = parseInt (numero);
    if (isNaN(num) || num<=0){
        console.log("Introduce número válido.");
    }else{
        let factorial = 1;
        for (let i=1; i<=num; i++){
        factorial *=i;
        }
        console.log(`El factorial de ${num} es ${factorial}.`);
    }
    rl.close();
});