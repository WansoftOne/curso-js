debugger;
a();
b();
console.log(x);

function a() {
    let x = 10;
    c();
    
    function c () {
        console.log(x);
    }
}

function b() {
    let x = 20;
    console.log(x)
}