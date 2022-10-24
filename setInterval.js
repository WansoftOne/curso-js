const accion = () => {
    console.log("Gatito");
}

const intervaloDeTiempo = setInterval(accion, 1000);

// Para detener el intervalo de tiempo debemos usar la funcion:
// clearInterval(intervaloDeTiempo) pasando como argumento el intervaloDeTiempo que deseamos detener.