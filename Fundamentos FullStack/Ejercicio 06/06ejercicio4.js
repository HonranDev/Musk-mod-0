const readline = require('readline');
const rl=readline.createInterface ({
    input:process.stdin,
    output:process.stdout
});

rl.question("Introduce número:" , (numero) => {
    const num = parseInt(numero);

if (isNaN(num) || num<=0){
    console.log("Introduce número válido.");
}else{
    console.log(`Tabla de Multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    rl.close();
}
});
