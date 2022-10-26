
// const promesa = fetch("https://github.com/WansoftOne");
/**
 * Simulador de como es el objeto Promise
 * {
 *  "estado": "fulfilled",
 *  "result": "data"
 * }
 */

// promesa.then((respuesta) => {
//     debugger;
//     console.log(respuesta);
// }).catch((error) => {
//     debugger;
//     console.log(error);
// });

function sumar(a, b) {
    // return Promise.resolve(a + b);
    return new Promise((resolve, reject) => {
        try {
            let resultado = a + b;
            resolve(resultado);
        } catch (error) {
            reject(error);
        }
        
    });
}

console.log("inicio");
sumar(10, 5).then((resultado) => {
    console.log(`la promesa resolvio exitosamente con el valor: ${resultado}`);
}).catch((error) => {
    console.log("la promesa retorno un error: ", error);
});
console.log("fin");