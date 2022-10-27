let contactos = [
    {
        nombre: "Magdalena",
        telefono: "1111111",
        correo: "magda@email.com"
    },
    {
        nombre: "Carmen",
        telefono: "1111112",
        correo: "carmen@email.com"
    },
    {
        nombre: "Jere",
        telefono: "1111113",
        correo: "jere@email.com"
    },
    {
        nombre: "Mary",
        telefono: "1111114",
        correo: "mary@email.com"
    }
]
contactos = null;

/**
 * IMPORTANTE xD
 * 
 * El callback pasado a la funcion "then" como argumento 
 * es la accion que se ejecutara en caso de que la
 * promesa responda con status "fulfilled"(promesa llena, completada, exitosa).
 * 
 * El callback pasado a la funcion "catch" como argumento
 * es la accion que se ejecutara en caso de que la promesa
 * reponsa con status "rejected"(error).
 */
let nombre = "ar";
buscarContactoPorNombre(nombre)
    .then((contactosEncontrados) => {
        debugger;
        console.log(contactosEncontrados);
    })
    .catch((error) => {
        debugger;
        console.error(error);
    });

/**
 * Esta funcion trata de imitar la funcionalidad que tenemos en nuestros smartphones
 * cuando buscamos a un contacto en nuestra agenda.
 * Escribimos el "nombre" del contactos que deseamos buscar 
 * y retorna un array de considencias(contactos que continene el nombre pasado como argumento)
 * @param {*} nombre 
 * @returns 
 */
function buscarContactoPorNombre(nombre) {
    return new Promise((resolve, reject) => {
        try {
            let contactosQueContienenElNombre = []
            for(let contacto of contactos) {
                // Valida si contacto.nombre contiene a "nombre"
                if(contacto.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                    contactosQueContienenElNombre.push(contacto);
                }
            }
    
            resolve(contactosQueContienenElNombre);
        } catch (error) {
            reject(error);
        }
        
    })
}