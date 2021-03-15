function texto(obj){

    var expression = document.getElementById("datos").innerText;
    var cadena = document.getElementById("parrafo1").innerText;


    var index = cadena.search(expression);

    if(index >= 0) {
    document.getElementById("charNum").innerText = 'la palabra existe dentro de la cadena y se encuentra en la posición '+ index;
    }
        else{
        document.getElementById("charNum").innerText = 'la palabra no existe dentro de la cadena';
        }

}