const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotasJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascotas')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputPydos = document.getElementById('pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigos = document.getElementById('vidas-enemigos')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')


let ataqueJugador
let ataqueEnemigo
let vidasEnemigos = 3
let vidasJugador = 3

class Blech {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Blech('Hipodoge', './assent/Bleach-Anime-1.png', 5)

let capipepo = new Blech('Capipepo', './assent/Bleach-Anime-2.png', 5)

let pydos = new Blech('Pydos', './assent/Bleach-Anime-3.png', 5)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotasJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'none'

}



function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert('Seleccione alguna mascota')
    }

    seleccionarMascotaEnsemigo()

}

function seleccionarMascotaEnsemigo() {
    let mascotaAleatorio = aleatorio(1, 3)


    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensajes('EMPATE')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensajes('GANASTE')
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensajes('GANASTE')
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensajes('GANASTE')
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos
    } else {
        crearMensajes('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigos == 0) {
        crearMensajesFinal('GANASTE DE PURA CHEPA')
    } else if (vidasJugador == 0) {
        crearMensajesFinal('PERDISTE MANCO')
    }
}

function crearMensajes(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;

    let nuevoAtaqueDelEnemigo = document.createElement('p')
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    sectionMensajes.innerHTML = resultado

    ataqueDelJugador.innerHTML = ''
    ataqueDelEnemigo.innerHTML = ''

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}



function crearMensajesFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true

    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

window.addEventListener('load', iniciarJuego)