const frase = "En un lugar de la mancha";
let tiempoInicial =  new Date();;
let haTerminado = false;
const inputValue = document.getElementById("typed-value");

document.getElementById("quote").innerText = frase;

document.getElementById("message").innerText = "";

document.getElementById("start").addEventListener("click", function () {
    inputValue.classList.remove("mal");
    inputValue.value = "";
    tiempoInicial = new Date();
    haTerminado = false;
});

inputValue.addEventListener("input", function () {
    if (haTerminado) return;
    let ahora = new Date();
    let tiempo = (ahora - tiempoInicial) / 1000;
    let typed = inputValue.value;
    if (typed === frase) {
        document.getElementById("message").innerText = "Felicidades!!, has tardado " + tiempo;
        haTerminado = true;
    } else {
        if (frase.startsWith(typed)) {
            inputValue.classList.remove("mal");
            document.getElementById("message").innerText = "Aún no está completa, llevas " + tiempo;
        } else {
            inputValue.classList.add("mal");
            document.getElementById("message").innerText = "No coincide la frase, llevas " + tiempo;
        }
    }
});