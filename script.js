let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click", corroborarDatos);


function corroborarDatos(){
let ingreseNombre = document.getElementById("ingreseNombre");
let ingreseApellido = document.getElementById("ingreseApellido");
let ingreseMail = document.getElementById("ingreseMail");
let ingreseConsulta = document.getElementById("ingreseConsulta");

   if (ingreseNombre==""); {
    alert("Debe ingresar un nombre");
   }
   if (ingreseApellido=="");{
    alert("Debe ingresar un apellido");
   }
   if (ingreseMail=="");{
    alert("Debe ingresar Mail");
   }
   if (ingreseConsulta=="");{
    alert("Debe ingresar consulta");
   }
} 