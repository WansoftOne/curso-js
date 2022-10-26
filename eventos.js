registrarEventos();

let contador = 4;
/**
 * Esta funcion registra los eventos onclick a los botones fulanitos...
 */
function registrarEventos() {
    let chimeBoton = document.getElementById("mi-chisme");
    let chisme = "Marisol quiere renunciar pero no puede 🙊";
    
    function divulgarChisme() {
        console.log(chisme);
    }
    
    // "click" es un evento... click1 no es un evento
    chimeBoton.addEventListener("click", divulgarChisme);

    let miBoton = document.getElementById("mi-boton");
    miBoton.addEventListener("click", () => {
        console.log("Boton equivocado, para saber el chisme presiona Divulgar chisme 😮");
    });
}