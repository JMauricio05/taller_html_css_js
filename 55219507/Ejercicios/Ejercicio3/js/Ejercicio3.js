function validarInputs(name,edad){
    let numeros = /[0-9]/;
    let letras = /[a-zA-Z]/;
    let nam = numeros.test(name);
    let ed = letras.test(edad);
        if(nam){
            alert('Nombre invalido, no pueden ir numeros')
            return false;
        }else if(ed){
            alert('Edad invalido, no pueden ir letras')
            return false;
        }else{
            return true;
        }
    
}

document.getElementById('btnIdentificar').addEventListener('click', function () {
    let name = document.getElementById('nombreInput').value;
    let edad = document.getElementById('edadInput').value;
    let tbodyCaracter = document.getElementById('identific');
    let validar = validarInputs(name,edad);
    if(validar){
        if(Number(edad)>=18){
            tbodyCaracter.innerText = 'Hola '+name+', eres mayor de edad.';
        }else if(Number(edad)<18 && Number(edad)>0){
            tbodyCaracter.innerText = 'Hola '+name+', eres menor de edad.';
        }else{
            tbodyCaracter.innerText = 'No es una edad válida.';
        } 
        console.log(validar);
    }
    
});