document.getElementById('btnInicio').addEventListener('click', function () {
    document.getElementById('modalPromedio').classList.remove('modalClosed');
    let num1 = document.getElementById('numero1Input').value;
    let num2 = document.getElementById('numero2Input').value;

    
    if (num1 < 0 && num2 < 0 ) {
        document.getElementById('Resul_numeros').value="Existe un Número que No es entero positivo";
    }else{
        if (Number.isInteger(num1) && Number.isInteger(num2) ) {
            numV=true;
        } else {
            numV=false;
        }
        if (numV == true) {
            if (num1%num2===0) {
                document.getElementById('Resul_numeros').value= "El número "+ num1 + " es divisible entre el número " + num2;
            }else{
                document.getElementById('Resul_numeros').value= "El número "+ num1 + " No es divisible entre el número " + num2;
            }
        }else{
            document.getElementById('Resul_numeros').value= " Existe un Número que No es entero";
        }

    }
});