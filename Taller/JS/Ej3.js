function Nomb(nombre){
    Nombingr=nombre.value;
}
function Edad(edad){
    Edadingr=edad.value;
}
function press3(){
    if (Edadingr>=18) {
        document.getElementById("Edadin").innerHTML="Hola "+Nombingr+" eres mayor de edad";
    }
    else {
        document.getElementById("Edadin").innerHTML="Hola "+Nombingr+" eres menor de edad";
    }
    if (Edadingr<= 0) {
        document.getElementById("Edadin").innerHTML="Edad no valida";
    }
}