const readline = require('readline');
const rl = readline.createInterface ({
    input:process.stdin,
    output:process.stdout
});

rl.question ("Introduce el Año:" , (inputYear) => {
    const year = parseInt(inputYear);

if (isNaN(year)|| year <= 0){
    console.log("Introduce un Año válido.");
}else{
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year} es año bisiesto.`);
    }else{
        console.log(`${year} no es año bisiesto.`);
    }
    }
    rl.close();
});
