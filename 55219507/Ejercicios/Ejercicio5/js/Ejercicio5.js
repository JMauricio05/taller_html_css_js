function validarNumero(numer){
    for(let i=0; i < numer.length;i++){
        if(numer.charAt(0) == '-'){
            for(let a =0; a < numer.length;a++){
                if(numer.charAt(a)== '.'){
                    let mensaje = 'Debe ingresar números enteros positivos.';
                    return mensaje;
                }
            }
            let mensaje = 'Debe ingresar números positivos.';
            return mensaje;
        }else if(numer.charAt(i) == '.'){
            let mensaje = 'Debe ingresar números enteros.';
            return mensaje;
        }
    }
    return 'ok';
}

document.getElementById('btnCalcular').addEventListener('click', function () {
    let numero = document.getElementById('palabraInput').value;
    let tbodyCaracter = document.getElementById('caracteres');
    let validarM = validarNumero(numero);
    if(validarM == 'ok'){
        if(numero % 2 == 0){
            tbodyCaracter.innerText = 'Es par';
        }else{
            tbodyCaracter.innerText = 'Es impar';
        }
    }else{
        tbodyCaracter.innerText = validarM;
    }
});