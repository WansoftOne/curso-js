// null y undefined -> ambos significan ausencia de valor.
let nombre;
let nombre2 = null



const favoritos = [
    {
        nombre: "Magda",
        telefono: "111111111",
        correo: "magda@email.com"
    },
    {
        nombre:  "Jere",
        telefono: "111111112",
        correo: "jere@email.com"
    } 
];

function buscar(nombre) {
    for(let i=0; i<favoritos.length; i++){
        if(favoritos[i].nombre===nombre){
            return favoritos[i];
        }
    }

    return null;
}

function esMayorDeEdad(edad) {
    if(edad >= 18) { 
        return true;
    }

    return false
}

function esMayorDeEdad2(edad) {
    return edad >= 18;
}

console.log(nombre);