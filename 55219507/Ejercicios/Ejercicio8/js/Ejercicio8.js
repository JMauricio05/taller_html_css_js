function closeModal(id){
    document.getElementById(id).classList.add('modalClosed');
    document.getElementById('resultadoLista').innerHTML=" ";
}

function errores(numer){
    let letras = /[a-zA-Z]/;
    let num = letras.test(numer);
    for(let a=0; a<numer.length;a++){
                if(numer.charAt(a)=='.'){
                    document.getElementById('resultadoLista').innerHTML+= '<h6 class = "error">'+numer+' no es un número entero</h6>';
                    return false;
                }
    }
    if(num){
        document.getElementById('resultadoLista').innerHTML+= '<h6 class = "error">'+numer+' no es un número entero</h6>';
        return false;
    }else{
        return true;
    }
}
function identificarParImpar(){

    let listaNumeros = document.getElementById('nombreInput').value+',';
    let numeros = "";

    let numPares = [];
    let numImpares = [];
    for(let i=0; i<listaNumeros.length ;i++){
        if(listaNumeros[i]!=","){
            numeros+=listaNumeros[i];
        }else{
            
            let error = errores(numeros);
            if(error){
                if(numeros%2==0){
                    numPares.push(numeros);
                    
                    document.getElementById('resultadoLista').innerHTML+= '<h6 class = "par">'+numPares+' es numero par</h6>';
                }else{
                    numImpares.push(numeros);
                    
                    document.getElementById('resultadoLista').innerHTML+= '<h6 class = "impar">'+numImpares+" es numero impar</h6>";
                }
            }
            numImpares = [];
            numPares = [];
            numeros = '';
            
        }
    }
}

document.getElementById('btnIdentificar').addEventListener('click', function () {
    
    identificarParImpar();
    document.getElementById('modalResultado').classList.remove('modalClosed');
});