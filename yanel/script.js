let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click", corroborarDatos);

function corroborarDatos() {
    let ingreseNombre = document.getElementById("ingreseNombre").value;
    let ingreseApellido = document.getElementById("ingreseApellido").value;
    let ingreseMail = document.getElementById("ingreseMail").value;
    let ingreseConsulta = document.getElementById("ingreseConsulta").value;

    if (ingreseNombre === "") {
        alert("Debe ingresar un nombre");
    }
    if (ingreseApellido === "") {
        alert("Debe ingresar un apellido");
    }
    if (ingreseMail === "") {
        alert("Debe ingresar una dirección de e-mail válida");
    }
    if (ingreseConsulta === "") {
        alert("Debe ingresar su consulta");
    }
}