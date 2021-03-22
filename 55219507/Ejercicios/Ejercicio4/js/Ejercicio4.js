//let materia = [];
let suma = 0;
let prom = 0;
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

function closeModal(idModal){
    document.getElementById(idModal).classList.add('modalClosed');
}

document.getElementById('btnCalcular').addEventListener('click', function () {
    document.getElementById('modalFormulario').classList.remove('modalClosed');
    
    let nombre = document.getElementById('nombreInput').value;
    let materia = document.getElementById('materiaInput').value;
    let nota1 = document.getElementById('nota1Input').value;
    let nota2 = document.getElementById('nota2Input').value;
    let nota3 = document.getElementById('nota3Input').value;
    let bodyResultado = document.getElementById('cadenaResult');
    suma = Number(nota1)+Number(nota2)+Number(nota3);
    prom = suma/3;
    if(prom >= 3){
        document.getElementById('divResult').classList.add('colorV');
        bodyResultado.innerHTML = 'Felicitaciones '+nombre+',<span> su nota es '+prom.toFixed(2)+'</span>,pasaste la materia '+materia;
    }else if(prom < 3){
        document.getElementById('divResult').classList.add('colorR');
        bodyResultado.innerHTML = 'Lo siento '+nombre+',<span> su nota es '+prom.toFixed(2)+'</span>,no pasaste la materia '+materia;
    }
});
