const IVA = {
    // Constante para el IVA general que es del 21%
    general: 1.21,

    // Constante para el IVA reducido que es del 10%
    reducido: 1.1,

    // Constante para el IVA superreducido que es del 4%
    superreducido: 1.04
}

const libro = {
    precio: 18,
    tipoIva: IVA.general
}
const ventana = {
    precio: 270,
    tipoIva: IVA.reducido
}
const mascarilla = {
    precio: 0.27,
    tipoIva: IVA.superreducido
}

console.log("El precio sin IVA del libro es de " 
    + libro.precio + "€ y el precio con IVA es de " 
        + (libro.precio*libro.tipoIva).toFixed(2) + "€");

console.log("El precio sin IVA de la ventana es de " 
    + ventana.precio + "€ y el precio con IVA es de " + 
        (ventana.precio*ventana.tipoIva).toFixed(2) + "€");

console.log("El precio sin IVA de una mascarilla es de " 
    + mascarilla.precio + "€ y el precio con IVA es de " + 
        (mascarilla.precio*mascarilla.tipoIva).toFixed(4) + "€");