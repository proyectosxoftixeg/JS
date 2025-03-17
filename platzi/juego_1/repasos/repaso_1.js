// 1. Piedra
// 2. Papel
// 3. Tijera
// Creamos la funcion eleccion para que el pc elija aleatoreiamente
function aleatoreo(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}
// Creamos la funcion de eleccion de Jugador y PC
function eleccion (jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "PIEDRA"
    }else if(jugada == 2){
        resultado = "PAPEL"
    }else if(jugada == 3){
        resultado = "TIJERA"
    }else{
        resultado = "MAL ELEGIDO"
    }
    return resultado;
}
// Creamos las variables que se van a utilizar
let jugador;
let min = 1;
let max = 3;
let pc = aleatoreo(1,3);
jugador = prompt('Elige: 1.PIEDRA, 2.PAPEL, 3.TIJERA')
alert('Jugador Elige: '+eleccion(jugador));
alert('PC Elige: ' + eleccion(pc));
if(pc == jugador){
    alert('EMPATE')
}else if(jugador == 1  && pc == 3){
    alert('GANASTE')
}else if(jugador == 2 && pc == 1){
    alert('GANASTE')
}else if(jugador == 3 && pc == 2){
    alert('GANASTE')
}else{
    alert('PERDISTE')
}






