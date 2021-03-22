function validardividendo(dividendo){
    for(let i=0; i < dividendo.length;i++){
        if(dividendo.charAt(0) == '-'){
            for(let a =0; a < dividendo.length;a++){
                if(dividendo.charAt(a)== '.'){
                    let mensaje = 'entero positivo';
                    return mensaje;
                }
            }
            let mensaje = 'positivo';
            return mensaje;
        }else if(dividendo.charAt(i) == '.'){
            let mensaje = 'entero';
            return mensaje;
        }
    }
    return true;
}
function validardivisor(divisor){
    for(let i=0; i < divisor.length;i++){
        if(divisor.charAt(0) == '-'){
            for(let a =0; a < divisor.length;a++){
                if(divisor.charAt(a)== '.'){
                    let mensaje = 'entero positivo';
                    return mensaje;
                }
            }
            let mensaje = 'positivo';
            return mensaje;
        }else if(divisor.charAt(i) == '.'){
            let mensaje = 'entero';
            return mensaje;
        }
    }
    return true;
}
function division(dividendo,divisor){
    let result = (dividendo/divisor)+'';
    for(let i = 0; i<result.length; i++){
            if(result.charAt(i) == '.'){
               
                mensj = 'El número '+dividendo+' no es divisible entre el número '+divisor;
                return mensj
            }
    }return mensj = 'El número '+dividendo+' es divisible entre el número '+divisor;
}
document.getElementById('btnCalcular').addEventListener('click', function () {
    let dividendo = document.getElementById('dividendoInput').value;
    let divisor = document.getElementById('divisorInput').value;
    let tbodyresult = document.getElementById('Resultado');
    let divid = validardividendo(dividendo);
    let divis = validardivisor(divisor);
    if(divid == true && divis == true){
        let result = division(dividendo,divisor);
        tbodyresult.innerText= result;
    }else{
        if(divid == 'entero positivo' && divis == 'entero positivo'){
            tbodyresult.innerText = 'Los números '+dividendo+' y '+divisor+' no son enteros positivos.';
        }else if(divid == 'entero positivo'){
            tbodyresult.innerText = 'El número '+dividendo+' no es entero positivo.';
        }else if(divis == 'entero positivo'){
            tbodyresult.innerText = 'El número '+divisor+' no es entero positivo.';
        }else if(divid == 'entero' && divis == 'entero'){
            tbodyresult.innerText = 'Los números '+dividendo+' y '+divisor+' no son enteros.';
        }else if(divid == 'entero'){
            tbodyresult.innerText = 'El número '+dividendo+' no es entero.';
        }else if(divis == 'entero'){
            tbodyresult.innerText = 'El número '+divisor+' no es entero.';
        }else if(divid == 'positivo' && divis == 'positivo'){
            tbodyresult.innerText = 'Los números '+dividendo+' y '+divisor+' no son positivos.';
        }else if(divid == 'positivo'){
            tbodyresult.innerText = 'El número '+dividendo+' no es positivo.';
        }else if(divis == 'positivo'){
            tbodyresult.innerText = 'El número '+divisor+' no es positivo.';
        }
    }
});