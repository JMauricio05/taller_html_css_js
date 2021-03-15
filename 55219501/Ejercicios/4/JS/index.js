function promedio(obj, notaf){

    var nombress = document.getElementById("idnombre").value;
    var materiaa = document.getElementById("idmateria").value;
    var nota1= document.getElementById("idnota1").value;
    var nota2= document.getElementById("idnota2").value;
    var nota3= document.getElementById("idnota3").value;
    
    var notaf = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

    if (notaf >= 3){
        document.getElementById("charNum").innerText = 'FELICITACIONES '+nombress+','+' PASO LA MATERIA: '+materiaa;
        document.getElementById('idnota').style.color = "green";
        document.getElementById("idnota").innerText = ' SU NOTA ES: '+notaf.toFixed(1);
        } else {
            document.getElementById("charNum").innerText = 'LO SIENTO '+nombress+','+' NO PASO LA MATERIA: '+materiaa;
            document.getElementById('idnota').style.color = "red";
            document.getElementById("idnota").innerText = ' SU NOTA ES: '+notaf.toFixed(1);
        }
        if (nombress == ""){
            document.getElementById("charNum").innerText = 'DIGITA TU NOMBRE Y NOTAS';
        }
        if (materiaa == ""){
            document.getElementById("charNum").innerText = 'DIGITA TU MATERIA Y NOTAS';
        }

    }