window.addEventListener('load', iniciarJuego); //Implementamos la Funcion Iniciar Juego para el boton Seleccionar
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota')//Escuchamos la propiedad escuhar boton click
    btnMascota.addEventListener('click',seleccionarMascotaJugador);// implementamos la funcion seleccionarMascotaJugador para los check radio de cada jugador

    // Botones de Ataque
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let btnReinicar = document.getElementById('boton-reiniciar')
    btnReinicar.addEventListener('click', reiniciarJuego)

    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'
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
    let seleccionAtaqueEnemigo = aleatoria(1,3)
    if(seleccionAtaqueEnemigo == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(seleccionAtaqueEnemigo == 2){
        ataqueEnemigo =  "AGUA"
    }else if(seleccionAtaqueEnemigo == 3){
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function aleatoria(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}
function seleccionarMascotaJugador(){
    let seccionEligeMascota = document.getElementById('elige-mascota')
    seccionEligeMascota.style.display = 'none'
    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'block'
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capepipo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert('Elige una Mascota')
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

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu Mascota ataco con ' + ataqueJugador + ' La Mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;
    sectionMensaje.appendChild(parrafo)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true;
    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'block'
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

// Vidas de cada Jugador

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('Felicitaciones GANASTE !! 🪅')
    }else if(vidasJugador == 0){
        crearMensajeFinal('Lo Sentimos PERDISTE 😭')
    }
}



function reiniciarJuego(){
    location.reload()
}





