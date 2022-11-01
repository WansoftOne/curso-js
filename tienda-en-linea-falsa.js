const productos = [
    {
        id: 1,
        nombre: "Control xbox",
        marca: "Microsoft",
        precio: 1000,
        stock: 10
    }, 
    {
        id: 2,
        nombre: "Audifonos bluetoot",
        marca: "Sony",
        precio: 800,
        stock: 2
    },
    {
        id: 3,
        nombre: "Truza",
        marca: "Calvin clein",
        precio: 100,
        stock: 0
    }
];

let ordenesDeCompra = [];

// Esta clase ayuda a relalizar las operaciones de CRUD a nuestra "Base de Datos"
class CrudProducto {
    constructor() {
        this.nombre = "Carmen"
    }

    /**
     * Busca un producto con base a su id.
     * retorna un producto en caso de que el id existe. en caso contrario este metodo
     * retorna null.
     * @param {*} id 
     */
    async buscarProductoPorId(id) {
        for (let producto of productos) {
            if (id === producto.id) {
                return producto;
            }
        }

        return null;
    }

    async actualizarStock(idDelProducto, cantidad) {
        const x = 0;
        for (let producto of productos) {
            if (idDelProducto === producto.id) {
                const nuevoStock = producto.stock - cantidad;
                if (nuevoStock < 0) {
                    throw `Solo exiten ${producto.stock} en stock de la tienda del producto ${producto.nombre}`
                }

                producto.stock = nuevoStock;
                break;
            }
        }
    }

    /**
     * Este metodo actualiza el stock del producto solo si tenemos stock suficiente.
     * @param {*} solicitudDeCompra es un array con elementos como este {id: 0, cantidad: 0}
     */
    async crearOrden(solicitudDeCompra) {
        const ordenDeCompra = {
            id: Date.now(),
            productosSolicitados: [],
            totalAPagar: 0,
            errores: []
        }

        for (let productoEnCarrito of solicitudDeCompra) {
            const producto = await this.buscarProductoPorId(productoEnCarrito.id);
            if (producto) {
                try {
                    await this.actualizarStock(producto.id, productoEnCarrito.cantidad);
                    ordenDeCompra.totalAPagar += producto.precio * productoEnCarrito.cantidad;
                    ordenDeCompra.productosSolicitados.push({
                        ...producto,
                        cantidad: productoEnCarrito.cantidad
                    });
                } catch(error) {
                    ordenDeCompra.errores.push(error);
                }
            } else {
                ordenDeCompra.errores.push(`El producto con id ${productoEnCarrito.id} no existe`)
            }
        }

        return ordenDeCompra;
    }
}

class ServicoDePagos {
    
    /**
     * Metodo utilizado para realizar el pago de una compra
     * @param {Object} peticionDePago
     * @param {string} peticionDePago.tipoTarjeta
     * @param {string} peticionDePago.tajeta
     * @param {number} peticionDePago.totalAPagar
     */
    async pagar(peticionDePago) {
        return {
            tipoTarjeta: peticionDePago.tipoTarjeta,
            tajeta: peticionDePago.tajeta,
            totalAPagar: peticionDePago.totalAPagar, 
            estado: "Compra Exitosa"
        }
    }
}

class ServicioDeVentas {
    constructor() {
        this.servicoDePagos = new ServicoDePagos();
        this.crudProducto = new CrudProducto();
    }
    
    /**
     * 
     * @param {Object[]} productos 
     * @param {number} productos[].id - The name of an employee.
     * @param {number} productos[].cantidad - The name of an employee. 
     * @returns 
     */
    async realizarCompra(productos, medioDePago) {
        debugger;
        // Cuando la orden ya fue creada ya sabemos cuanto debemos cobrar al cliente
        const orden = await this.crudProducto.crearOrden(productos)
        try {
            await this.servicoDePagos.pagar({
                tipoTarjeta: medioDePago.tipoTarjeta,
                tajeta: medioDePago.tarjeta,
                totalAPagar: orden.totalAPagar,
            });
        } catch(error) {
            orden.errores.push(`No fue posible realizar el pago, intente con otro metodo de pago 🙂`)
        }

        return orden;
    }
}


const servicioDeVentas = new ServicioDeVentas();
const orden = [
    {
        id: 20,
        cantidad: 2
    },
    {
        id: 2,
        cantidad: 1
    }
];

const medioDePago = {
    tipoTarjeta: "Tarjeta de Credito",
    tarjeta: "xxxxxxxxxxxxxxx"
}