// for (let huevos = 0 ; huevos < 6 ; huevos++) {
//     console.log("Huevos: " + huevos);
//     console.log("Romper");
//     console.log("Vaciar");
// }

/*
let huevos = 6;
let usados = 0;

while (huevos>0) {
    // console.log("Huevo Nº: " + huevos);
    usados++;
    console.log(`Huevo Nº: ${huevos}, he usado ${usados}`);
    console.log("Romper");
    console.log("Vaciar");
    huevos--;
}
*/

let sabores = ["Cebolla", "Tomate", "Chorizo", "Gulas"];
// console.log(sabores[0]);
// console.log(sabores[5]);
// sabores.push("Queso");
// console.log(sabores[4]);
// console.log(sabores);
// console.log(sabores[5]);
// console.log(sabores.length);

for (let i = 0 ; i < sabores.length ; i++) {
    console.log(`FOR: En la posición ${i} tenemos ${sabores[i]}`);
}

let i = 0;
while (i < sabores.length) {
    console.log(`WHILE: En la posición ${i} tenemos ${sabores[i]}`);
    i++
}

function sumar (a, b) {
    return a + b;
}
sumar(2+5);

let agregar = function (a, b) {
    return a + b;
}
agregar(2, 5);

let añadir = (a, b) => a + b;
añadir(2, 5);

sabores.forEach((sabor) => console.log(`FOR_EACH: En la posición ${sabor} tenemos ${sabor}`));
sabores.forEach(function(sabor) {
    console.log(`FOR_EACH: En la posición ${sabor} tenemos ${sabor}`);
})

