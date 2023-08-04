//Función que recoge la info del formulario en formato json. Hay que guardarla en un array.

var arrdatos = [];

function recogerInformacion(){
    let nombre = document.getElementById("nombre").value.toLowerCase();
    let origen = document.getElementById("origen").value.toLowerCase();
    let destino = document.getElementById("destino").value.toLowerCase();
    let numeroPersonas = document.getElementById("numero_personas").value.toLowerCase();

    let cliente = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        numeroPersonas: numeroPersonas,
    }

    arrdatos.push(cliente);
    console.log(arrdatos);
}

function filtro(){
    let mostrar= arrdatos.filter(dato => dato.destino == "canarias" || dato.destino == "mallorca" || dato.destino == "galicia");
    let stringMostrar = "";
    for (let datos of mostrar){
        stringMostrar += `<p>Cliente: ${datos.nombre}</p> <p> Destino ${datos.destino}</p>`;
    }
    console.log(stringMostrar);
    document.getElementById("visual").innerHTML = stringMostrar;
}