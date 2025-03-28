window.addEventListener('load',iniciarJuego)
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo =3;
function aleatoria (min,max){
    return Math.floor(Math.random() * (max - min + 1)+min)
}
function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota');
    btnMascota.addEventListener('click',seleccionarMascotaJugador);

    // Botones de Ataque
    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'
}
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)
    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'block'
    let seccionEligeMascota = document.getElementById('elige-mascota')
    seccionEligeMascota.style.display = 'none'

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        spanMascotaJugador.innerHTML = 'Eligue un Jugador'
    }
    seleccionMascotaEnemigo()
}

function seleccionMascotaEnemigo(){
    let seleccionAleatoria = aleatoria(1,3);
    let spanEnemigo = document.getElementById('mascota-enemigo')
    if(seleccionAleatoria == 1){
        spanEnemigo.innerHTML = 'Hipodoge'
    }else if(seleccionAleatoria == 2){
        spanEnemigo.innerHTML = 'Capipepo'
    }else if(seleccionAleatoria == 3){
        spanEnemigo.innerHTML = 'Ratigueya'
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
    let seleccionAleatoriaEnemigo = aleatoria(1,3)
    if(seleccionAleatoriaEnemigo == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(seleccionAleatoriaEnemigo == 2){
        ataqueEnemigo = 'AGUA'
    }else if(seleccionAleatoriaEnemigo == 3){
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
    }else if( ataqueJugador == 'FUEGO ' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE 😂')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE 😂')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == 'TIERRA ' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE 😂')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje('PERDISTE 😩')
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('Felicitaciones haz GANADO 😂')
    }else if(vidasJugador == 0){
        crearMensajeFinal('Lo sentimos haz PERTDIDO 😩')
    }
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu Mascota Ataco con ' + ataqueJugador + ' la Mascota del enemigo atacon con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal;
    sectionMensaje.appendChild(parrafo)

    // se deshabilitan los botones de ataque

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.disabled = true;
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.disabled = true;
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.disabled = true;
    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

