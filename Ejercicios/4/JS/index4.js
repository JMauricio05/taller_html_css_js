function promedio(obj){

    var nombress = document.getElementById("idnombre").value;
    var materiaa = document.getElementById("idmateria").value;
    
    var nota1= document.getElementById("idnota1").value;
    var nota2= document.getElementById("idnota2").value;
    var nota3= document.getElementById("idnota3").value;

    var notaf = nota1+nota2+nota3/3;

    if (nota1 >= 1){
        document.getElementById("charNum").innerHTML = 'FELICITACIONES '+nombress+','+' SU NOTA ES: '+notaf+' PASO LA MATERIA: '+materiaa;
        } else {
            document.getElementById("charNum").innerHTML = 'LO SIENTO '+nombress+','+' SU NOTA ES: '+notaf+' NO PASO LA MATERIA: '+materiaa;
        }
    }