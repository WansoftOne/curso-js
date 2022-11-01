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

console.log("inicio");
// buscarContactoPorNombre()
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((error) => {
//         console.log(error)
//     });
ejecutar().then((resultado) => {
    console.log(`El resultado de la promesa ejecutar fue: ${resultado}`);
});
console.log("fin");

async function buscarContactoPorNombre(nombre) {
    try {
        let contactosQueContienenElNombre = []
        for(let contacto of contactos) {
            // Valida si contacto.nombre contiene a "nombre"
            if(contacto.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                contactosQueContienenElNombre.push(contacto);
            }
        }

        return contactosQueContienenElNombre;
    } catch (error) {
        console.error(error);
        throw 'Error al consultar la base de datos';
    }
}

const getString = async () => {
    return "Hola Juan";
}

const getNumero = async () => {
    return 44;
}

const getBoleano = async () => {
    return false;
}

const getObject = async () => {
    return {
        nombre: "carmen"
    }
}

const getArray = async () => {
    return [1, 2, 3]
}


// Una funcion async retorna una promesa y permite el uso del keyword
// await dentro de la funcion.
async function ejecutar() {
    // si estamos seguros que nuestro codigo(buscarContactoPorNombre()) no arroja errores
    // se puede omitir el uso de try catch
    try {
        // solo podemos esperar(await) promesas
        // es decir "await algunaPromesa"
        const contactosEncontrados = await buscarContactoPorNombre("Car");
        console.log(contactosEncontrados);
    } catch(error) {
        console.log(error);
    }
}
/**
 * pending
 * fulfilled
 * rejected
 */
const result = buscarContactoPorNombre("Car")
    .then((result) => {})
    .catch((error) => {});




async function ejecutar2() {
    try {
        const miString = await getString();
        const miNumero = await getNumero();
        const miBoleano = await getBoleano();
        const miObject = await getObject();
        const miArray = await getArray();
    } catch(error) {
        // Lanzar un alert al usuario
        // Mostrar el mensaje de error al usuario.
        // etc.
       console.log(error);
    }
}
console.log("fin");