// Juego de Piedra Pepel o Tijera las opcioones que tiene el juego son: 1. Es Piedra , 2. Es papel , 3. Es Tijera

let jugador = 0;
let pc = 1;

// En esta linea se esta solicitando al jugar elegir una opcion la cual queda asignada a la variable Jugador
jugador = prompt("Elige: 1. Para Piedra, 2. Para Papel, 3. Para Tijera");


//EN esta seccion de codigo el jugador esta eligiendo que opcion desea tomar para juegar
if(jugador == 1){
    alert("Elegiste Piedra")
}else if(jugador == 2){
    alert("Elegiste Papel")
}else if(jugador == 3){
    alert("Elegiste Tijera")
}else{
    alert("Elgiste PERDER")
}

//Ahora vamos a programar para que el PC pueda elegir la opcion deseada, en este caso esta eligiendo papel por defecto porque la variable esta definida para la opcion 2

if(pc == 1){
    alert("Pc Elige Piedra")
}else if(pc == 2){
    alert("Pc Elige Papel")
}else if(pc == 3){
    alert("Pc Elige Tijera")
}else{
    alert("No puede haber combate")
}

//De aqui en adelante se van a codificar los combates o las posibles opciones que se pueden tener para competir.

if(pc == jugador){
    alert("EMPATE");
}else if(jugador == 1 && pc == 3){
    alert("GANASTE");
}else if(jugador == 2 && pc == 1){
    alert("GANASTE")
}else if(jugador == 3 && pc == 2){
    alert("GANASTE");
}else{
    alert("PERDISTE");
}