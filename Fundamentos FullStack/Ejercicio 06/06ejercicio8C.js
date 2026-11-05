const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introducir base: ', (base) => {
    rl.question('Introducir altura: ', (altura) => {
        crearRectangulo(parseInt(base), parseInt(altura));
        rl.close();
    });
});

function crearRectangulo(base, altura) {
    for (let i = 0; i < altura; i++) {
        let fila = '';

        for (let j = 0; j < base; j++) {
                                          // Bordes del rectángulo
            if (i === 0 || i === altura - 1 || j === 0 || j === base - 1) {
                fila += '*';
            } else {
                fila += ' ';             //Espacio interior
            }
        }

        console.log(fila);
    }
}