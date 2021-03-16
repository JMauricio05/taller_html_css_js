function closeModal(idmodal){
    document.getElementById(idmodal).classList.add('modalClosed');
}
function validaciones(edad,nombre){
    let caracteres= /[a-z A-Z .,*]/;
    let numeros = /[0-9]/;
    let valedad = caracteres.test(edad);
    let valcarac = numeros.test(nombre);
    if(valedad){
        alert("No se permiten letras");
        return false;
    }
    else if(valcarac){
        alert("No se permiten numeros");
        return false;
    }
    else{
        return true;
    }
}
document.getElementById('btn-cal').addEventListener('click',function(){
    let edad = document.getElementById('edad').value;
    let nombre = document.getElementById('nombretxt').value;
    let resultado = document.getElementById('carac');
    let validacion = validaciones(edad,nombre);
    if(validacion){
    document.getElementById('modalPromedio').classList.remove('modalClosed');
        if(edad>=18){
            resultado.innerText= "Hola "+nombre +", eres mayor de edad.";
            }
        else if(edad > 0 && edad < 18){
            resultado.innerText= "Hola "+nombre +", eres menor de edad.";
        }
        else{
            resultado.innerText= "No es una edad valida";
        }
    }
})