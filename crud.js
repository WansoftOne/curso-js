class Empleado {
    constructor(puesto, depto, nombre, matricula) {
        this.puesto = puesto;
        this.depto = depto;
        this.nombre = nombre;
        this.matricula = matricula;
    }

    saludar() {
        console.log("hola me llamo " + this.nombre + " y trabajo como " + this.puesto);
        //`Hola me llamo ${this.nombre} y tabajo como ${this.puesto}`
    }
}

class CrudEmpleado {
    // Esta funcion imita a la funcion map (de los Arrays)
    // fakeMap(callback){
    //     const arrayConvertido = [];
    //     for(let i=0; i<arrayEmpleados.length; i++) {
    //         const nuevoObjeto = callback(arrayEmpleados[i]);
    //         arrayConvertido.push(nuevoObjeto);
    //     }
    //     return arrayConvertido;
    // }

    llamarTablaEmpleado() {
        let jsonEmpleados = sessionStorage.getItem("tablaEmpleado");//"[{"puesto": "dev"}]" null
        const arrayEmpleados = (jsonEmpleados != null) ? JSON.parse(jsonEmpleados) : [];

        return arrayEmpleados.map((elemento) => {
            return new Empleado(elemento.puesto, elemento.depto, elemento.nombre, elemento.matricula);
        });
    }

    guardarTablaEmpleados(arrayEmpleados) {
        let jsonEmpleados = JSON.stringify(arrayEmpleados);
        sessionStorage.setItem("tablaEmpleado", jsonEmpleados);
    }

    create(empleado) {
        // // !TRUE -> FALSE
        // // !FALSE -> TRUE 
        // if (!(empleado instanceof Empleado)){
        // }
        // let jsonEmpleados = sessionStorage.getItem("tablaEmpleado");//"[{"puesto": "dev"}]" null
        // const arrayEmpleados =(jsonEmpleados!=null)? JSON.parse(jsonEmpleados) : []; 
        //const arrayEmpleados = JSON.parse(jsonEmpleados) ?? [];
        const arrayEmpleados = this.llamarTablaEmpleado();
        arrayEmpleados.push(empleado);
        // jsonEmpleados = JSON.stringify(arrayEmpleados);
        // sessionStorage.setItem("tablaEmpleado", jsonEmpleados);
        this.guardarTablaEmpleados(arrayEmpleados);
    }

    read() {
        // let jsonEmpleados = sessionStorage.getItem("tablaEmpleado");
        // const arrayEmpleados = (jsonEmpleados) ? JSON.parse(jsonEmpleados) : [];
        return this.llamarTablaEmpleado();


    }

    updateByMatricula(matricula, atributosModif) {

        // let jsonEmpleados = sessionStorage.getItem("tablaEmpleado");
        // const arrayEmpleados = (jsonEmpleados)? JSON.parse(jsonEmpleados) : [];
        const arrayEmpleados = this.llamarTablaEmpleado();
        for (let i = 0; i < arrayEmpleados.length; i++) {
            if (arrayEmpleados[i].matricula === matricula) {
                // arrayEmpleados[i] = emplModificado;
                for (let atributo in atributosModif) {
                    arrayEmpleados[i][atributo] = atributosModif[atributo];
                }
                break;

            }
        }
        // jsonEmpleados = JSON.stringify(arrayEmpleados);
        // sessionStorage.setItem("tablaEmpleado", jsonEmpleados);
        this.guardarTablaEmpleados(arrayEmpleados);
    }

    deleteByMatricula(matricula) {
        // sessionStorage.removeItem("tablaEmpleado")--> borra tabla empleados del sessionStorage.
        //    let jsonEmpleados = sessionStorage.getItem("tablaEmpleado");
        //    const arrayEmpleados = (jsonEmpleados) ? JSON.parse(jsonEmpleados) : [];
        const arrayEmpleados = this.llamarTablaEmpleado();
        for (let i = 0; i < arrayEmpleados.length; i++) {
            if (arrayEmpleados[i].matricula === matricula) {
                arrayEmpleados.splice(i, 1);
            }
        }
        //    jsonEmpleados = JSON.stringify(arrayEmpleados);
        //    sessionStorage.setItem("tablaEmpleado",jsonEmpleados);
        this.guardarTablaEmpleados(arrayEmpleados);

    }

}
// Creamos una instancia de CrudEmpleado que nos servira para crear, consultar, eliminar usuarios.
var crud = new CrudEmpleado();
// Creamos 2 instancias de empleado y las almacenamos en el sesion storage usando crud.create()
// esto tiene como objetivo siempre tener al menos 2 empleados almacenados en el sesionStorage.
var e1 = new Empleado("dev", "sistemas", "Carmen", 1234);
var e2 = new Empleado("dev", "sistemas", "Magda", 1235);
crud.create(e1);
crud.create(e2);
// Objeto util para actualizar un empleado utilizando crud.updateByMatricula()
const modificaciones = { depto: "RH" }
