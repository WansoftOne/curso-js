let resolverPromesa;
let rejectPromesa;

function crearPromesa() {
    return new Promise((resolve, reject) => {
        resolverPromesa = resolve;
        rejectPromesa = reject;
    })
}

/**
 * Las promesas tienen 3 estados
 * 1.- Pending
 * 2.- fulfilled -> La promesa actualiza su estado a "fulfilled(Llena, completada, finalizada)"
 *     cuando la funcion "resolve" es llamada.
 * 3.- rejected -> la promesa actualiza su estado a "rejected(error)"
 *     cuando la funcion "reject" es llamada.
 */

const promesa = crearPromesa();
// resolverPromesa("Respuesta exitosa");
// console.log(promesa);
// rejectPromesa("Error en la promesa")
// console.log(promesa);