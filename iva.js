const IVA = {
    // Constante para el IVA general que es del 21%
    general: 0.21,

    // Constante para el IVA reducido que es del 10%
    reducido: 0.1,

    // Constante para el IVA superreducido que es del 4%
    superreducido: 0.04,

    // Constante para productos exentos de IVA
    sinIva: 0
}

const agenda = {
    nombre: 'Agenda',
    precio: 12,
    tipoIva: IVA.general,
    iva: true
}
const ventana = {
    nombre: 'Ventana',
    precio: 270,
    tipoIva: IVA.reducido,
    iva: true
}
const mascarilla = {
    nombre: 'Mascarilla',
    precio: 0.27,
    tipoIva: IVA.superreducido,
    iva: true
}
const curso = {
    nombre: 'Curso Front-End',
    precio: 300,
    tipoIva: IVA.sinIva,
    iva: false
}

/*
console.log("El precio sin IVA del libro es de " 
    + libro.precio + "€ y el precio con IVA es de " 
        + (libro.precio*libro.tipoIva).toFixed(2) + "€");

console.log("El precio sin IVA de la ventana es de " 
    + ventana.precio + "€ y el precio con IVA es de " + 
        (ventana.precio*ventana.tipoIva).toFixed(2) + "€");

console.log("El precio sin IVA de una mascarilla es de " 
    + mascarilla.precio + "€ y el precio con IVA es de " + 
        (mascarilla.precio*mascarilla.tipoIva).toFixed(4) + "€");
*/

function calcularCuotaIva(objeto) {
    return objeto.precio * objeto.tipoIva;
}

function calcularImporteTotal(objeto) {
    return objeto.precio + calcularCuotaIva(objeto);
}

// console.log(calcularCuotaIva(libro));
// console.log(calcularImporteTotal(libro));

function imprimirDetallePrecio(objeto) {
    let cuotaIva = calcularCuotaIva(objeto);
    let precioTotal = calcularImporteTotal(objeto);
    return "El precio sin iva de la " + objeto.nombre + " es " + objeto.precio + "€, la cuota de IVA será " 
    + cuotaIva + "€, por lo tanto el PVP será de " 
        + precioTotal + "€"
}

// console.log(imprimirDetallePrecio(agenda));
// console.log(imprimirDetallePrecio(ventana));
// console.log(imprimirDetallePrecio(mascarilla));

let productos = [];
productos.push(agenda, ventana, mascarilla, curso);

// Aprovechando el parámetro tipoIva que teníamos creado anteriormente
productos.forEach( function(producto) {
    let tieneIva = producto.tipoIva !== 0;
    if (tieneIva) {
        console.log(`La ${producto.nombre} tiene IVA y el desglose de su precio es el siguiente:
            ${imprimirDetallePrecio(producto)}`);
    } else {
        console.log(`El ${producto.nombre} está exento de IVA y tiene un precio de ${producto.precio}€`);
    }
})

// Utilizando un nuevo parámetro true o false para ver si el producto está exento de IVA o no
// productos.forEach( function(producto) {
//     let tieneIva = producto.iva;
//     if (tieneIva) {
//         console.log(`La ${producto.nombre} tiene IVA y el desglose de su precio es el siguiente:
//             ${imprimirDetallePrecio(producto)}`);
//     } else {
//         console.log(`El ${producto.nombre} está exento de IVA y tiene un precio de ${producto.precio}€`);
//     }
// })