const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const randomNumber = Math.floor(Math.random()*10)+1;
let attempts = 0; //lleva la cuenta de cuantos intentos lleva

function solicitarNumero (){
    rl.question('He pensado número del 1 al 10. ¡Adivínalo!:' , (numero)=> {
        attempts++; //incrementa el contador de intentos
        if(isNaN(numero)|| numero <1 || numero>10 ){
            console.log('¡Recuerda que tiene que ser entre 1 y 10!');
            solicitarNumero();

        }else if (parseInt(numero, 10)===randomNumber){
            console.log(`¡Correcto!... El número era ${randomNumber}. Has necesitado ${attempts} intentos.`);
            rl.close();
            return;
        }else{
            console.log('Intentalo de nuevo.');
        }

        solicitarNumero();   

    });
}
solicitarNumero();