// 1. Piedra
// 2. Papel
// 3. Tijera
function eleccion(min,max){
    return Math.floor(Math.random()*(max=min+1)+min)
}
let jugador = 0;
let min = 1;
let max = 3;
let pc = eleccion(1,3);
jugador = prompt("Elige: 1.Piedra , 2.Papel, 3.Tijera")
// alert('Elegiste: '+ jugador);
// El jugador elige
if(jugador == 1){
    alert('Elegiste PIEDRA')
}else if(jugador == 2){
    alert('Elegiste PAPEL ')
}else if(jugador == 3){
    alert('Elejiste TIJERA')
}else{
    alert('NULL')
}
// el pc elige
if(pc == 1){
    alert('Pc Elige 🪨 ')
}else if( pc == 2){
    alert('Pc Elige 🔖')
}else if(pc == 3){
    alert('Pc Elige ✂️')
}else{
    alert('Pc No elige Nada')
}
// COMBTES
if(pc == jugador){
    alert('EMPATE')
}else if (jugador == 1 && pc == 3){
    alert('GANASTE')
}else if (jugador == 2 && pc == 1){
    alert('GANASTE')
}else if (jugador == 3 && pc == 2){
    alert('GANASTE')
}else{
    alert('PERDISTE')
}
