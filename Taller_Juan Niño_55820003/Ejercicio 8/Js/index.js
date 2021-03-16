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
    let imprimir = "";
    for (let i = 0; i < arrayNumeros.length; i++) {
        
        esPar = Number (arrayNumeros[i]) % 2;

        if (Number (arrayNumeros[i]) < 0) {
            imprimir+= "\n*"+arrayNumeros[i]+" No es un Número entero positivo";
        }else{
            if (Number.isInteger(Number (arrayNumeros[i]))) {
                numV=true;
            } else {
                numV=false;
            }
            if (numV == true) {
                if (esPar == 0) {
                    imprimir+= "\n*"+arrayNumeros[i]+" Es número Par";
                } else {
                    imprimir+= "\n*"+arrayNumeros[i]+" Es número Impar";
                }
            }else{
                imprimir+= "\n*"+arrayNumeros[i]+" No es un Número entero";
            }
    
        }
        
    }
    document.getElementById('Resul_numeros').value=imprimir;
});

