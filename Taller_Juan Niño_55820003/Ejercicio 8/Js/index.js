let arrayNumeros = [];
document.getElementById('btnRegistrar').addEventListener('click', function () {
    
    let numeros = document.getElementById('numerosInput').value;
    arrayNumeros = numeros.split (",");
    for (let index = 0; index < arrayNumeros.length; index++) {
     console.log(arrayNumeros[index]);
     
 }
});
document.getElementById('btnInicio').addEventListener('click', function () {
    document.getElementById('modalPromedio').classList.remove('modalClosed');
    let esPar = 0;
    let numV = false;
    let imprimirP = "";
    let imprimirI = "";
    let imprimirX = "";
    for (let i = 0; i < arrayNumeros.length; i++) {
        
        esPar = Number (arrayNumeros[i]) % 2;

        if (Number (arrayNumeros[i]) < 0) {
            imprimirX+= "\n*"+arrayNumeros[i]+" No es un Número entero positivo";
            document.getElementById('Resul_numerosX').style.color="red"
        }else{
            if (Number.isInteger(Number (arrayNumeros[i]))) {
                numV=true;
            } else {
                numV=false;
            }
            if (numV == true) {
                if (esPar == 0) {
                    imprimirP+= "\n*"+arrayNumeros[i]+" Es número Par";
                    document.getElementById('Resul_numerosP').style.color="blue";
                } else {
                    imprimirI+= "\n*"+arrayNumeros[i]+" Es número Impar";
                    document.getElementById('Resul_numerosI').style.color="green";
                }
            }else{
                imprimirX+= "\n*"+arrayNumeros[i]+" No es un Número entero";
                document.getElementById('Resul_numerosX').style.color="red";
            }
    
        }
        
    }
    document.getElementById('Resul_numerosP').value=imprimirP;
    document.getElementById('Resul_numerosI').value=imprimirI;
    document.getElementById('Resul_numerosX').value=imprimirX;
});

