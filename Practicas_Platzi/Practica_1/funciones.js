// Programa Piedra, Pepel o Tijeras
// 1. Elegiste Piedra
// 2. Elegiste Papel
// 3. Elegiste Tijeras

//Definimos las funciones y que el jugador y el pc escojan la opcion deseada, para generar el numero aleatorio
function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function eleccion(jugada){
    let resultado = " ";
    if(jugada == 1){
        resultado = "PIEDRA"
    }else if(jugada == 2){
        resultado = "PAPEL";
    }else if(jugada == 3){
        resultado = "TIJERAS"
    }else{
        resultado = "NULO"
    }
    return resultado;
}
// Definir Variables
let jugador = 0 ;
let pc = aleatorio(1,3)  // Esta parte del codigo genera una opcion aleatoria para el PC
jugador = prompt("Elige una opcion: 1. Piedra ,  2. Papel , 3. Tijeras");
alert("Tu Eliges:  " + eleccion(jugador));
alert("PC Elige: " + eleccion(pc));

// JUEGO

if( pc == jugador){
    alert("EMPATE")
}else if( jugador == 1 && pc == 3){
    alert("GANA EL JUGADOR")
}else if(jugador == 2 && pc == 1){
    alert("Gana El JUGADOR")
}else if(jugador == 3 && pc == 2){
    alert("Gana El JUGADOR")
}else{
    alert("GANA El PC")
}

