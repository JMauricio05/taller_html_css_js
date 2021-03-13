function varificar(obj){

    var valoresAceptados = /^[.,0-9]+$/;

    if (obj.value.match(valoresAceptados)){
        document.getElementById("charNum").innerHTML = '('+obj.value+')'+' NUMERO';
        } else {
            document.getElementById("charNum").innerHTML = '('+obj.value+')' +' TEXTO';
            } if (obj.value==""){
                document.getElementById("charNum").innerHTML = obj.value +' INGRESE UN DATO';
            }
}