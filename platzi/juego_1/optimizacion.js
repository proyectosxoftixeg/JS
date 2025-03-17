// 1. Piedra
// 2. Papel
// 3. Tijera

function eleccion(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function mostrarEleccion(opcion, quien) {
    const opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];
    alert(`${quien} Elige: ${opciones[opcion - 1]}`);
}

function resultado(jugador, pc) {
    if (jugador === pc) {
        alert('EMPATE');
    } else if (
        (jugador === 1 && pc === 3) || 
        (jugador === 2 && pc === 1) || 
        (jugador === 3 && pc === 2)
    ) {
        alert('GANASTE');
    } else {
        alert('PERDISTE');
    }
}

const min = 1;
const max = 3;
let jugador = parseInt(prompt("Elige: 1.Piedra , 2.Papel, 3.Tijera"));

if (jugador < 1 || jugador > 3) {
    alert('Selección no válida');
} else {
    const pc = eleccion(min, max);
    mostrarEleccion(jugador, 'Tu');
    mostrarEleccion(pc, 'Pc');

    resultado(jugador, pc);
}
