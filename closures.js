// 
/**
 * las funciones en javascript son consideradas ciudadanos de primer nivel
 * esto quiere decir:
 * 1.-que una funcion puede tener como parametro a otra funcion
 *   ---- function a(fun) {}
 * 2.- que podemos almacenar una funcion en una variable
 *   ---- let a = () => "carmen" // al no tener llaves significa que la funcion retorna el valor "carmen"
 * 3.- una funcion puede retornar otra funcion
 *   ---- function a() {
 *          function b() {}
 *          
 *          return b;
 *        }
 * @returns 
 */
function a() {
    let x = "carmen";
    let y = "magda";
    console.log(y);
    
    // Esta es otra forma de retornar una funcion
    // function b () {
    //     console.log(x);
    // }
    // return b;

    return function () {
        console.log(x);
    }
}

debugger;
const funcionResultado = a();
funcionResultado();