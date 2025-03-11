// 1. Definimos las funciones Aleatorio y eleccion

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada){
    let resultado = " ";
    if(jugada == 1){
        resultado= ("PIEDRA");
    }else if(jugada == 2){
        resultado = ("PAPEL");
    }else if(jugada == 3){
        resultado = "TIJERA"
    }else {
        resultado = "MAL ELEGIDO"
    }
    return resultado;
}

// Declaracion de Variables

let jugador = 0;
let pc = 0;

// funcion batallas del jueg

function jugarPiedraPapelTijeras() {
    let triunfos = 0;
    let perdidas = 0;
    while (triunfos < 3 && perdidas < 3) {
        let pc = aleatorio(1, 3);
        let jugador = parseInt(prompt("Elija 1.PIEDRA, 2.PAPEL, 3.TIJERAS"));
        alert("PC ELIGE: " + eleccion(pc));
        alert("TU ELEGISTE: " + eleccion(jugador));
        if (pc === jugador) {
            alert("EMPATE");
        } else if (
            (jugador === 1 && pc === 3) ||
            (jugador === 2 && pc === 1) ||
            (jugador === 3 && pc === 2)
        ) {
            alert("GANA JUGADOR");
            triunfos++;
        } else {
            alert("GANA PC");
            perdidas++;
        }
    }
    alert("GANASTE: " + triunfos + " Veces. Perdiste: " + perdidas + " Veces");
}
// Llamar a la función para iniciar el juego
jugarPiedraPapelTijeras();
