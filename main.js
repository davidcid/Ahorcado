const listaPalabras = ['bandera', 'garaje', 'amarillo', 'gaviota', 'carretera', 'zapatillas'];
const palabra = listaPalabras[Math.floor(Math.random() * (listaPalabras.length))];
const huecoPalabra = document.querySelector(".palabra-secreta .letras");
const huecoYaUsada = document.querySelector(".letras-ya-usadas .letras");
const huecoVidas = document.querySelectorAll(".vidas");
const palabraMostrada = [];
let vidas = 5;

// función que se ejecuta cuando se pulsa una tecla
window.addEventListener("keyup", (e) => {
    const huecoLetras = document.querySelectorAll(".palabra-secreta .letras li");
    
    // Si ha acertado
    if(palabra.split("").includes(e.key)) {
        // Escribe la letra en todos los huecos correspondientes
        huecoLetras.forEach((letra, i) => {
            if (palabra.split("")[i] === e.key) {
                letra.innerHTML = e.key;
            }
        });
    // Si ha fallado
    } else {
        // Escribe la letra fallada debajo de la palabra secreta
        const nuevaLetra = huecoYaUsada.appendChild(document.createElement("li"));
    nuevaLetra.innerHTML = e.key;
        huecoVidas.removeChild(huecoVidas.childNodes{nodeName="#text"});
        // Y te resta una vida
        vidas -= 1;
        // Comprueba si te has quedado sin vidas
        if (vidas === 0) {
            console.log("Fin de la partida. Inténtalo de nuevo!");
        } else {
            console.log(`Te quedan ${vidas} vidas`);
        }
    }
});

// Inicia la partida. Se ejecuta al cargar la página y al pulsar el botón nueva partida
function iniciarJuego() {
    // Crea un "li" en blanco por cada letra que tenga la palabra secreta
    palabra.split("").forEach( letra => {
        huecoPalabra.appendChild(document.createElement("li"));
    });
    console.log(palabra);
    
}



iniciarJuego();