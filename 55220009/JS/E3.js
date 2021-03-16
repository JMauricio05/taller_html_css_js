

//let nombre = document.getElementById('nombreId').value;
//let edad = document.getElementById('edadId').value;


function validarEdad (){
    let nombre = document.getElementById('nombreId').value;
    let edad = document.getElementById('edadId').value;
    let x= "";

    if(edad>=18){
       x = "Hola, " + nombre + " es mayor de edad."
        console.log(x);
        
    }else{
       x = "Hola, " + nombre + " no es mayor de edad."
       console.log(x);
    }
    document.getElementById('validado').innerHTML = x;
}
//document.getElementById('validado').innerHTML = x;