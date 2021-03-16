document.getElementById('btnCalcular').addEventListener('click', function () {
    let numero = document.getElementById('palabraInput').value;
    let tbodyCaracter = document.getElementById('caracteres');
    if(Number(numero) % 2 == 0){
        tbodyCaracter.innerText = 'Es par';
    }else{
        tbodyCaracter.innerText = 'Es impar';
    }
});