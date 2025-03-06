// Programa Piedra, Pepel o Tijeras
// 1. Elegiste Piedra
// 2. Elegiste Papel
// 3. Elegiste Tijeras

//Definimos una funcion para generar el numero aleatorio
function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Definir Variables
let jugador = 0 ;
let pc = aleatorio(1,3)  // Esta parte del codigo genera una opcion aleatoria para el PC

// Se captura la opcion elegida por el usuario

jugador = prompt("Elige una opcion: 1. Piedra ,  2. Papel , 3. Tijeras");

// Eleccion del Jugador

if(jugador == 1){
    alert("Elegiste PIEDARA")
}else if(jugador == 2){
    alert("Elegiste PAPEL")
}else if(jugador == 3){
    alert("Elegiste TIJERAS")
}else{
    alert("Elegiste PERDER")
}

// Eleccion PC

if(pc == 1){
    alert(" PC Elige PIEDRA")
}else if(pc == 2){
    alert("PC Elige PAPEL")
}else if(pc == 3){
    alert("PC Elige TIJERA")
}


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


