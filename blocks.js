var mensaje = "Hello";
{
    
    let mensaje = "holiwi";
    {
        let mensaje = "hi"
        console.log(mensaje);
        mensaje = "jijijij";
        console.log(mensaje);
    }
    console.log(mensaje);
}
    
function a() {
    debugger;
    var mensaje = "Hello";
    {
        
        let mensaje = "holiwi";
        {
            debugger;
            let mensaje = "hi"
            var dev = "carmen";
            console.log(mensaje);
            mensaje = "jijijij";
            console.log(mensaje);
        }
        console.log(mensaje);
    }
}

a();
// if(true) {
//     console.log("x");
//     console.log("x");
//     console.log("x");
// }
