let saldo = 900;
let precio = 1500;
let puedoComprar = saldo > precio;
let creditoDisponible = 500;
console.log("Precio: " + precio);

if (puedoComprar) {
  console.log("Me lo compro");
  saldo = saldo - precio;
} else {
  console.log("Me aguanto");
  let necesito = precio - saldo;
  console.log("Necesito: " + necesito);
  let mensajeCredito =
    necesito > creditoDisponible ? "No puedo pedir crédito"
        : creditoDisponible - necesito > 100 ? "Sí que pediré crédito" : "Puedo pero no lo pediré";
  console.log(mensajeCredito);
}
console.log("Tengo: " + saldo);

let formaDePago = "Efectivo";
// if (formaDePago === "Tarjeta") {
//   console.log("Pagaré con trajeta");
// } else if (formaDePago === "Bizum") {
//   console.log("Pagaré con bizum");
// } else if (formaDePago === "Transferencia") {
//   console.log("Pagaré con transferencia");
// } else if (formaDePago === "Efectivo") {
//   console.log("Pagaré en efectivo");
// } else {
//   console.log("Medio de pago no válido");
// }

switch (formaDePago) {
  case "Tarjeta":
    console.log("Pagaré con tarjeta");
    break;
  case "Bizum":
    console.log("Pagaré con bizum");
    break;
  case "Transferencia":
    console.log("Pagaré con transferencia");
    break;
  case "Efectivo":
    console.log("Pagaré en efectivo");
    break;
  default:
    console.log("Medio de pago no válido");
}
