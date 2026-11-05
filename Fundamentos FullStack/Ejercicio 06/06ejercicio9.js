const readline = require('readline');
const rl = readline.createInterface ({
    input:process.stdin,
    output:process.stdout
});

const letras = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];

function solicitarNumero(){
rl.question('Introduce un número del 0 al 10:',(numero) =>{
    const num = parseInt(numero,10);
    
if (isNaN(numero)||numero<0 || numero>10){
    console.log('Número inválido.');
    solicitarNumero();
}else{
    console.log(letras[parseInt(numero,10)]);
    rl.close();
}
});
}
solicitarNumero();

