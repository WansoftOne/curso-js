const ejecutar = () => {
    console.log("Hola Gatito");
} 

console.log("Inicio");
const timer = setTimeout(ejecutar, 0);
console.log("Fin");

// Para detener la ejecucion de un timer se debe utilizar la funcion
// clearTimeout(timer)