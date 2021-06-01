const url = "https://api.frankfurter.app/latest";
console.log("iniciando..." + url);

// promesas
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

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
