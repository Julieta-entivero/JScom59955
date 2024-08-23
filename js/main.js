
// let secreto = "caramelo";

// for (let i = 0; i < 3; i++){
//     let ingresa = prompt("Descubre la palabra oculta, pista.. dulce!");
//     if (ingresa.toLowerCase() === secreto){
//         console.log("ACERTASTE");
//         break;
//     } else{
//         console.log("NO ACERTASTE:(");
//     }
// }

class Producto {
    constructor(nombre, edicion, estado, precio) {
        this.nombre = nombre
        this.edicion = edicion
        this.estado = estado
        this.precio = precio 
    }

}
let arrayProductos = [];

function cargarProductos() {
    let producto1 = new Producto("libroBrandonSanderson",2021,"nuevo",50000)
    let producto2 = new Producto("cumbresBorroscosas",2024,"nuevo", 30000)
    let producto3 = new Producto("orgulloyPrejuicio",2019,"nuevo", 20000)
    let producto4 = new Producto("harryPotteryelPricionerodeAzkaban",2002,"nuevo", 70000)
    let producto5 = new Producto("percyJacksonylosDiosesdelOlimpo",2014,"nuevo", 80000)
    let producto6 = new Producto("PeterPan",2000,"nuevo", 15000)
    let producto7 = new Producto("MyladyJane",2024,"nuevo", 25000)
    arrayProductos.push(producto1)
    arrayProductos.push(producto2)
    arrayProductos.push(producto3)
    arrayProductos.push(producto4)
    arrayProductos.push(producto5)
    arrayProductos.push(producto6)
    arrayProductos.push(producto7)

    console.log('Productos: ', arrayProductos);
}


function comprobarRangoCuotas(cuotas) {
    if (cuotas >= 1 && cuotas <= 18) {
        return true
    } else {
        return false
    }
}


function devolverPrecioEnCuotas(anio, cuotas,) {
    console.log(arrayProductos);
    let producto = anio; 
    console.log()

    let multi = (producto.precio * cuotas)
    console.log('producto', producto)
    let precioConRecargo = multi / 100 + producto.precio
    console.log("precio", precioConRecargo / cuotas)
    return precioConRecargo / cuotas
}


function simuladorCuotas() {
    
    let anio = prompt("Indique el año del producto que quiere comprar [Posibles: 2000 - 2002 - 2014 - 2019 - 2021 - 2024]");

    while (isNaN(anio)) {
        anio = prompt("Error, el valor debe ser numerico, por favor indique nuevamente el año del producto");
    }
    let cuotas = prompt("Indique las cuotas a pagar del producto (entre 1 y 18):");

    // while (isNaN(cuotas) || !comprobarRangoCuotas(cuotas)) {
    //     cuotas = prompt("Error, el valor debe ser numerico y estar entre 1 y 18, por favor indique nuevamente la cantidad cuotas a pagar");
    // }
    let mensajeFinal = 'Su precio a pagar en ' + cuotas + ' cuotas es de: $' + devolverPrecioEnCuotas(anio, cuotas);
    alert(mensajeFinal);
}

// Programa de simulación
cargarProductos();
simuladorCuotas();
