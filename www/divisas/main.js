const url = "https://api.frankfurter.app/latest";
console.log("iniciando..." + url);

document.getElementById("calcular").addEventListener("click", function () {
    const urlConversor = "&fromEUR&to=USD";
    const cantidad = document.getElementById("euros");
    console.log(cantidad.value);

    const urlEnviar = url + "?" + cantidad.name + "=" + cantidad.value + urlConversor;
    console.log(urlEnviar);

    document.getElementById('enlace').setAttribute('href', urlEnviar);
});

// promesas
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        const fechaCadena = data.date;
        console.log(fechaCadena);
        const fechaNumber = Date.parse(fechaCadena);
        console.log("UNIX: " + fechaNumber);
        const fecha = new Date(fechaNumber);
        console.log("ISO: " + fecha.toISOString());
        const fechaEuropea = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        console.log("Europa: " + fechaEuropea);
        const spanFecha = document.getElementById("fecha");
        spanFecha.innerText = fechaEuropea;

        const objetoCotizaciones = data.rates;
        const ulCotizaciones = document.getElementById("cotizaciones");
        // ulCotizaciones.innerText = JSON.stringify(objetoCotizaciones);
        const divisas = Object.keys(objetoCotizaciones);
        divisas.forEach(divisa => {
            const liDivisa = document.createElement('li');
            const spanDivisa = document.createElement('span');
            spanDivisa.classList.add("divisa");
            spanDivisa.innerText = divisa + " : ";
            const spanCotizacion = document.createElement('span');
            spanCotizacion.classList.add("contravalor");
            const cotizacion = objetoCotizaciones[divisa];
            spanCotizacion.innerText = cotizacion;
            // liDivisa.innerText = divisa + ' : ' + cotizacion;
            liDivisa.appendChild(spanDivisa);
            liDivisa.appendChild(spanCotizacion);
            ulCotizaciones.appendChild(liDivisa);
        })
    });

// async function obtenerDatos() {
    // esperas
//     const response = await fetch(url);
//     if (response.ok) {
//         const data =  await response.json();
//         console.log(data);
//     } else {
//         console.log("Error: " + response.status);
//     }
// }
// obtenerDatos();
