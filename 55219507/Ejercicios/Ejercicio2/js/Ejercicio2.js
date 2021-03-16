document.getElementById('btnCalcular').addEventListener('click', function () {
    let text = document.getElementById('caracterInput').value;
    let tbodyCaracter = document.getElementById('tipoCaracter');
    if(Number(text)){
        tbodyCaracter.innerText = 'Es un tipo de dato numerico';
    }else{
        tbodyCaracter.innerText = 'Es un tipo de dato texto';
    }
    
});