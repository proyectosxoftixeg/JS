//1. Realizamos el reload de la pagina

window.addEventListener('load', iniciarJuego);

//2. Desarrollamos la funcion Iniciar Juego
function iniciarJuego(){
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click',seleccionarMascotaJuegador)
}

//3. Desarrollamos la Funcion seleccionar Mascota Jugador

function seleccionarMascotaJuegador(){
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
    }else if(seleccionAleatoria == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }else{
        alert('Pc no ha elegido Jugador')
    }
}

