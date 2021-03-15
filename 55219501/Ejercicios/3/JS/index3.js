function mayormenor(obj){

    var nombress = document.getElementById("idnombre").value;
    var edadd = document.getElementById("idedad").value;

    if (edadd >= 18){
        document.getElementById("charNum").innerHTML = 'HOLA '+nombress+','+' ERES MAYOR DE EDAD';
        } else {
            document.getElementById("charNum").innerHTML = 'HOLA '+nombress+',' +' NO ERES MAYOR DE EDAD';
            } if (edadd==""){
                document.getElementById("charNum").innerHTML = 'HOLA '+nombress;
            }
                if(edadd=="0"){
                    document.getElementById("charNum").innerHTML = '('+obj.value+')' +' NO ES UNA EDAD VALIDAD';
                }
                    if(obj.value==""){
                        document.getElementById("charNum").innerHTML =' INGRESE DATOS';
                    }

}