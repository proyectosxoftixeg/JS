// 1. Declaracion de funciones aleatorio y eleccion

// Funcion Aleatorio entre 1 y 3 que sera la opcion que tome el PC para jugar


function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Funcion seleccion, la cual sera utilziada tanto para el jugador como para el PC

function seleccion(jugada){
    let resultado = " ";
    if(jugada == 1){
        resultado = "PIEDRA"
    }else if(jugada == 2){
        resultado = "PAPEL"
    }else if(jugada == 3){
        resultado = "TIJERA"
    }else{
        resultado = "NULO"
    }
    return resultado;
}

// declaramos las variables para jugador y pc

let jugador = 0;
let pc = aleatorio(1,3);
jugador = prompt("Elige: 1.Piedra, 2.Papel, 3.Tijera");
alert("Jugador Elige: " + seleccion(jugador));
alert("PC Elige: " + seleccion(pc));


// Codificamos el Juego

if(pc == jugador ){
    alert("EMPATE");
}else if(jugador == 1 && pc == 3){
    alert("Jugador GANA")
}else if(jugador == 2 && pc == 1){
    alert("Jugador GANA")
}else if(jugador == 3 && pc == 2){
    alert("Jugador GANA")
}else{
    alert("Pc GANA")
}

