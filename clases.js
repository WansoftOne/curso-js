class Persona {
    #nombre = "";
    apellido = "";
    
    constructor() {
    }

    getNombre() {
        return this.#nombre;
    }
    setNombre(nombre) {
        debugger;
        if (typeof nombre === "string" && nombre.length >= 3) {
            this.#nombre = nombre;
            return;
        }
        throw new Error("Nombre no valido");
    }
}

Persona.prototype.test = function () {
    console.log(this);
}

let juan = new Persona("juan", "Salinas");
juan.test();
let carmen = new Persona("carmen", "Ruiz");
carmen.test();
