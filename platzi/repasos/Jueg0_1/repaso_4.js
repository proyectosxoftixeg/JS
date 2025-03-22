// definimos funcion de numero aleatorio
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// se realiza una funcion donde se elige un tipo de arma del juego

function seleccion(jugada){
    let resultado = " ";
    if(jugada == 1){
        resultado = "PIEDRA"
    }else if(jugada == 2){
        resultado = "PAPEL"
    }else if(jugada == 3){
        resultado = "TIJERA";
    }else{
        resultado = " Debes elegir Algo"
    }
    return resultado;
}

// se definen todas las variables

let jugador = 0;
let pc = 0;
let min = 1;
let max = 3;
let perdidas = 0;
let triunfos = 0;

// Batallas

while(triunfos <3 && perdidas <3){
    pc = aleatorio(1,3);
    jugador = prompt('Elige: 1.PIEDRA, 2.PAPEL, 3.tijera');
    alert('Jugador Elige: ' + seleccion(jugador))
    alert('PC Elige: ' + seleccion(pc));

    if(pc == jugador){
        alert('EMPATE')
    }else if (jugador == 1 && pc == 3){
        alert('GANASTE');
        triunfos = triunfos + 1
    }else if(jugador == 2 && pc == 1){
        alert('GANASTE')
        triunfos = triunfos + 1
    }else if(jugador == 3 && pc == 2){
        alert('GANASTE')
        triunfos = triunfos + 1
    }else{
        alert('PERDISTE')
        perdidas = perdidas + 1
    }
}

alert("Ganaste" + triunfos + " Veces - Perdiste "+ perdidas)

