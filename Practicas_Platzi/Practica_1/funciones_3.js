// 1. Declaramos las funciones para generar un numero aleatorio entre 1 y 3 
// 2. Declaramos una funcion para la eleccion del jugador y del pc


// Esta funcioin retorna un numero aletatorio entre 1 y 3
function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Esta funcion retorna la eleccion del juego entre el jugador y el PC

function eleccion(jugada){
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

// Declaramos las varialbes y llamamos las funciones creadas para cada jugador segun sea el caso

let jugador = 0;
let pc = aleatorio(1,3)
jugador = prompt("Elige: 1.PIEDRA, 2.PAPEL, 3.TIJERA");
alert("Jugador Elige: " + eleccion(jugador));
alert("PC Elige: "+ eleccion(pc))

// Aqui desarrollamos el juego

if(pc == jugador){
    alert("EMPATE")
}else if(jugador == 1 && pc == 3){
    alert("GANA JUGADOR")
}else if(jugador == 2 && pc == 1){
    alert("GANA JUGADOR")
}else if(jugador == 3 && pc == 2){
    alert("Gana JUGADOR")
}else{
    alert("GANA PC")
}

