const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretWord = 'javascript';
const hints = [
    'Es un lenguaje de programación.',
    'Es muy popular para desarrollo web.',
    'Su nombre empieza con "J".',
    'Es ampliamente utilizado junto con HTML y CSS.'
];

let attempts = 0;

const askQuestion = () => {
    if (attempts < hints.length) {
        console.log(`Pista ${attempts + 1}: ${hints[attempts]}`);
    } else {
        console.log('No hay más pistas disponibles.');
    }

    rl.question('Adivina la palabra secreta: ', (answer) => {
        if (answer.toLowerCase() === secretWord) {
            console.log('¡Felicidades! Has adivinado la palabra secreta.');
            rl.close();
        } else {
            console.log('Respuesta incorrecta. Inténtalo de nuevo.');
            attempts++;
            askQuestion();
        }
    });
};

console.log('Bienvenido al juego de adivinanzas.');
askQuestion();