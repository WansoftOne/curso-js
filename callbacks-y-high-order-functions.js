// callback -> es la funcion que se pasa como argumento a otra funcion.
const arr = [1,2,3,4];
let fun1 = (elemento) => {
 console.log(elemento);
}

// La funcion forEach de los arrays es una high order function
// y fun1 es un callback.
arr.forEach(fun1);
// high order function -> es una funcion que tiene como parametro a otra funcion.
function fakeForEach(callback, arr) {
    for(let i=0; i <arr.length; i++) {
        callback(arr[i])
    }
}

const lados = [10, 15, 5, 3];

// function calcularPerimetroCuadrados(arr) {
//     let resultados = [];
//     for (let lado of arr) {
//         resultados.push(lado * 4);
//     }
//     return resultados;
// }

// function calcularAreaoCuadrados(arr) {
//     let resultados = [];
//     for (let lado of arr) {
//         resultados.push(lado*lado);
//     }
//     return resultados;
// }


function calcular(arr, callback) {
    let resultados = [];
    for (let lado of arr) {
        resultados.push(callback(lado))
    }
    return resultados;
}

const calcularArea = (lado) => {
    debugger;
    return lado * lado;
}
const calcularPerimetro = (lado) => {
    debugger;
    return lado * 4;
}

const perimetros = calcular(lados, calcularPerimetro);

const areas = calcular(lados, calcularArea);


