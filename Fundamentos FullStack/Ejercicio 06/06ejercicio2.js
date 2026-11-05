const readline = require ('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Instroduzca primer número:" , (numero1) => {
    const num1=parseInt(numero1);
rl.question("Introduzca segundo número:" , (numero2) => {
    const num2=parseInt(numero2);
rl.question("Introduzca tercer número:" , (numero3) => {
    const num3=parseInt(numero3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
    console.log("Introduce números válidos.");
}else{
    if (num1%2===0 || num2%2===0 || num3%2===0){
        console.log("Almenos uno es PAR.");
    }else{
        console.log("Ninguno es PAR.");

    }
    }
    rl.close();
});
});
});
