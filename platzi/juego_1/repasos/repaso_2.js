/* Este codigo  */
function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function seleccion(jugada){
    let resultado = ' ';
    if(jugada == 1){
        resultado = 'PIEDRA';
    }else if(jugada == 2){
        resultado = "PAPEL";
    }else if(jugada == 3){
        reslutado = "TIJERA"
    }else{
        resultado = "Mala Eleccion"
    }
    return resultado
}
// Definicion de Variables
let jugador = 0;
let min = 1;
let max = 3;
let pc = 0;
let triunfos =0;
let perdidas = 0;

// Aqui desarrollamos el ciclo
while(triunfos < 3 && perdidas <3){
    pc = aleatorio(1,3);
    jugador = prompt('Por favor Elegir: 1.PIEDRA, 2.PAPEL, 3.TIJERA')
    alert('Jugador Elige: ' + seleccion(jugador));
    alert('PC Elige: ' + seleccion(pc));
    //COMBATE
    if(pc == jugador){
        alert('EMPATE')
    }else if(jugador == 1 && pc == 3 ){
        alert('GANASTE')
        triunfos = triunfos + 1;
    }else if(jugador == 2 && pc == 1){
        alert('GANASTE')
        triunfos = triunfos + 1;
    }else if(jugador == 3 && pc == 2){
        alert('GANASTE')
        triunfos = triunfos + 1;
    }else{
        alert('PERDISTE')
        perdidas = perdidas + 1;
    }
}

alert('Ganaste ' + triunfos + "veces , Perdiste " + perdidas)











