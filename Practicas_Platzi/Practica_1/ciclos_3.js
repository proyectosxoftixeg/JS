// 1 definimos la funcion que va a generar el numero aleatorio entre 1 y 3

function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

// 2. definimos la funcion para la eleccion del jugador y del pc

function eleccion (jugada){
    let resultado = " ";
    if(jugada == 1){
        resultado = "PIEDRA";
    }else if(jugada == 2){
        resultado = "PAPEL";
    }else if(jugada == 3){
        resultado = "TIJERA";
    }else{
        resultado = "MAL ELEGIDO"
    }
    return resultado;
}

// declaramos las variables

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

// declaramos el ciclo para las batallas del juego

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3);
    jugador = prompt("Elige: 1.Piedra 2.Papel 3.Tijera");
    alert("PC ELIGE: " + eleccion(pc));
    alert("Jugador ELIGE: " + eleccion(jugador));

    if(pc == jugador){
        alert("EMPATE");
    }else if(jugador == 1 && pc == 3){
        alert("GANA JUGADOR");
        triunfos = triunfos + 1;
    }else if(jugador == 2 && pc == 1){
        alert("GANA JUGADOR");
        triunfos = triunfos + 1;
    }else if(jugador == 3 && pc == 2){
        alert("GANA JUGADOR");
        triunfos = triunfos + 1
    }else{
        alert("GANA PC")
        perdidas = perdidas + 1;
    }
}

alert("GANASTE " + triunfos + (" Veces, Perdiste " + perdidas + (" Veces")));




