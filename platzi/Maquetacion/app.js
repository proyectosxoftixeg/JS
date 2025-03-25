
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

   if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = 'Hipodoge'
   }else if(inputCapipepo.checked){
    spanMascotaJugador.innerHTML = 'Capipepo'
   }else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML = 'Ratigueya'
   }else{
    alert('Debes elejer una mascota')
   }
   seleccionMascotaEnemigo();
}
function iniciarJuego(){
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador )
}
// Funcion para que el pc elija su mascota
function aleatoria(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

function seleccionMascotaEnemigo(){
    let ataqueAleatorio = aleatoria(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
window.addEventListener('load', iniciarJuego)


