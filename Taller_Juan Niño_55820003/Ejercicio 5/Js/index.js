document.getElementById('btnCalcular').addEventListener('click', function () {
    let num = 0;
    let esPar = 0;
    let numV = false;
    num = Number (document.getElementById("palabraInput").value);
    console.log(num);
    if (num < 0) {
        document.getElementById('Resul_caracteres').value="No es un Número entero positivo";
    }else{
        if (Number.isInteger(num)) {
            numV=true;
        } else {
            numV=false;
        }
        if (numV == true) {
            if (esPar == 0) {
                document.getElementById('Resul_caracteres').value="Par";
            } else {
                document.getElementById('Resul_caracteres').value="Impar";
            }
        }else{
            document.getElementById('Resul_caracteres').value="No es un Número entero";
        }

    }
     
    
    
    /*esPar = num % 2;
    if (esPar == 0) {
        document.getElementById('Resul_caracteres').value="Par";
    } else {
        document.getElementById('Resul_caracteres').value="Impar";
    }*/
    
});