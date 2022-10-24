function addEvents() {
    let contador = 0;
    document.getElementById("mi-boton").addEventListener("click", function () {
        console.log(`El boton se presiono ${++contador} veces`)
    })
}

addEvents();