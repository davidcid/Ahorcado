const listaPalabras = ['bandera', 'garaje', 'amarillo', 'gaviota', 'carretera', 'zapatillas'];
const palabra = listaPalabras[Math.floor(Math.random() * (listaPalabras.length))];
const huecoPalabra = document.querySelector(".palabra-secreta .letras");
const huecoVidas = document.querySelectorAll(".vidas");
const huecoYaUsada = document.querySelector(".letras-ya-usadas .letras");

const palabraMostrada = [];
const letrasYaUsadas = [];
let vidas = 5;
let juegoTerminado = false;
let letrasPorAdivinar = palabra.length;

// función que se ejecuta cuando se pulsa una tecla
function pulsarBoton (e) {
    const huecoLetras = document.querySelectorAll(".palabra-secreta .letras li");
    
    if (!juegoTerminado) {   

        // Si ha acertado
        if ((palabra.split("").includes(e.key)) && 
            !(letrasYaUsadas.includes(e.key))){
            // Escribe la letra en todos los huecos correspondientes
            huecoLetras.forEach((letra, i) => {
                if (palabra.split("")[i] === e.key) {
                    letra.innerHTML = e.key;
                    letrasPorAdivinar -= 1;
                }
            });
                
            // Comprueba si ya has acertado todas las letras y termina la partida
            if (letrasPorAdivinar === 0) {
                juegoTerminado = true;
                console.log ("Has ganado!");
            } 


        // Si ha fallado
        } else {
            // Escribe la letra fallada debajo de la palabra secreta
            const nuevaLetra = huecoYaUsada.appendChild(document.createElement("li"));
        nuevaLetra.innerHTML = e.key;
            // Elimina un corazón
            const contenedorVidas = document.querySelector(".vidas");
            const vidaMuerta = contenedorVidas.querySelectorAll("img")[0];
            contenedorVidas.removeChild(vidaMuerta);
            
            // Y te resta una vida
            vidas -= 1;
            // Comprueba si te has quedado sin vidas
            if (vidas === 0) {
                console.log("Fin de la partida. Inténtalo de nuevo!");
                juegoTerminado = true;
            } else {
                console.log(`Te quedan ${vidas} vidas`);
            }
        }
        letrasYaUsadas.push(e.key);
    }
}

// Inicia la partida. Se ejecuta al cargar la página y al pulsar el botón nueva partida
function iniciarJuego() {
    // Crea un "li" en blanco por cada letra que tenga la palabra secreta
    palabra.split("").forEach( letra => {
        huecoPalabra.appendChild(document.createElement("li"));
    });
    console.log(palabra);
    juegoTerminado = false;
}

iniciarJuego();
window.addEventListener("keyup", pulsarBoton);