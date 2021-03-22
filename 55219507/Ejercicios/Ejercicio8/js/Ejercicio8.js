function closeModal(id){
    document.getElementById(id).classList.add('modalClosed');
    document.getElementById('resultadoLista').innerHTML=" ";
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
            if(numeros%2==0){
                numPares.push(numeros);
                console.log(numPares);
                document.getElementById('resultadoLista').style.color = "blue";
                document.getElementById('resultadoLista').innerHTML+= numPares+ " es numero par <br>";
            }else{
                numImpares.push(numeros);
                console.log(numImpares);
                document.getElementById('resultadoLista').style.color = "green";
                document.getElementById('resultadoLista').innerHTML+= numImpares+" es numero impar <br>";
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