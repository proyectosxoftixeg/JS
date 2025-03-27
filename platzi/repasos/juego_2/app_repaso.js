//1. Realizamos el reload de la pagina

window.addEventListener('load', iniciarJuego);
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;


//2. Desarrollamos la funcion Iniciar Juego
function iniciarJuego(){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click',seleccionarMascotaJuegador)

// 2.1 Se crearan las variables de los ataques en la funcion iniciar Juego

    let botonFuego = document.getElementById('boton-fuego')
        botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
        botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
        botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
        botonReiniciar.addEventListener('click',reiniciarJuego)
}


//3. Desarrollamos la Funcion seleccionar Mascota Jugador

function seleccionarMascotaJuegador(){
    let sectionSeleccionarMascota = document.getElementById('elige-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipeo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML ="Hipodoge"
    }else if(inputCapipeo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert('Elige una Mascota')
    }

    seleccionMascotaEnemigo();
}

//4. Selecciona aleatora de los jugadores enemigo
//4.1 se debe realizar la funcion que eliga entre 1 y 3 que son las opciones fuego,agua y tierra
//4.2 se desarrolla la funcion de seleccion aleatoria para el enemigo

function aleatoria(min,max){
    return Math.floor(Math.random()* (max - min + 1)+min)
}

function seleccionMascotaEnemigo(){
    let seleccionAleatoria = aleatoria(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    if(seleccionAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
    }else if(seleccionAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatoria(1,3)
    if(ataqueAleatorio ==1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo =document.getElementById('vidas-enemigo')
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE')
    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else{
        crearMensaje('PERDISTE')
        vidasJugador = vidasJugador -1;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES!! GANASTE 🪅')
    }else if(vidasJugador == 0 ){
        crearMensajeFinal('PERDISTE 😭')
    }
}


function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild(parrafo)
    let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
        botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
        botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}


function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu Mascota ataco con ' +  ataqueJugador  + ' La mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensaje.appendChild(parrafo)
}

// Boton reiniciar

function reiniciarJuego(){
    location.reload()

}







