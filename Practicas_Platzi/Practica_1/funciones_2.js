// 1. Definimos las funciones

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion (jugada){
    let resultado = ' ';
    if (jugada == 1){
        resultado = "PIEDRA";
    }else if(jugada == 2){
        resultado = "PAPEL";
    }else if(jugada == 3){
        resultado =  "TIJERA";
    }else{
        resultado = "ELEGISTE PERDER "
    }
    return resultado;
}

// declaramos las variables que vamos a utilizar

let jugador = 0
let pc = aleatorio(1,3)
jugador = prompt("Elige una Opcion 1.PIEDRA, 2.PAPEL, 3.TIJERA");
alert("Tu Eliges: " + eleccion(jugador));
alert (" PC Elige: " + eleccion(pc));
// Juego

if(pc == jugador){
    alert('EMPATE');
}else if(jugador == 1 && pc == 3){
    alert ("GANA JUGADOR")
}else if(jugador == 2 && pc == 1){
    alert("GANA JUGADOR");
}else if (jugador == 3 && pc == 2){
    alert("GANA JUGADOR");
}else{
    alert ("GANA PC")
}