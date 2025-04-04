window.addEventListener('load', iniciarJuego)
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
function aleatoria (min,max){
    return Math.floor(Math.random() * (max-min + 1)+ min)
}
function iniciarJuego(){
    let btnSeleccionar = document.getElementById('boton-seleccionar');
    btnSeleccionar.addEventListener('click',seleccionMascotaJugador)
}
function seleccionMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego )

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'HIPODOGE'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'CAPIPEPO'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'RATIGUEYA'
    }else{
        alert('Elige una Mascota')
    }
    seleccionarMascotaEnemigo()
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
    let seleccionAleatoriaEnemigo = aleatoria(1,3)
    if(seleccionAleatoriaEnemigo == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(seleccionAleatoriaEnemigo == 2){
        ataqueEnemigo = 'AGUA'
    }else if(ataqueAleatorioEnemigo == 3){
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    spanVidasJugador.innerHTML = vidasJugador

    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    spanVidasEnemigo.innerHTML = vidasEnemigo

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE')
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje('PERDISTE 😭')
       vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ' La mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado;
    sectionMensaje.appendChild(parrafo)
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES HAZ GANADO 😂')
    }else if(vidasJugador == 0){
        crearMensajeFinal('LO SENTIMOS HAZ PERDIDO 😭')
    }
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild(parrafo)

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.disabled = true;
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.disabled = true;
    let btnTierra = document.getElementById('boton-tierra')
     btnTierra.disabled = true;
}




function seleccionarMascotaEnemigo(){
    let seleccionAleatoria = aleatoria(1,3);
    let spanEnemigo = document.getElementById('mascota-enemigo')

    if(seleccionAleatoria ==  1){
        spanEnemigo.innerHTML = 'HIPODOGE'
    }else if(seleccionAleatoria == 2){
        spanEnemigo.innerHTML = 'CAPIPEPO'
    }else if(seleccionAleatoria == 3){
        spanEnemigo.innerHTML = 'RATIGUEYA'
    }
}

function reiniciarJuego(){
    location.reload()
}

