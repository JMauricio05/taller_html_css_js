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
    let bodyResultado1 = document.getElementById('cadenaResult1');
    let bodyResultado2 = document.getElementById('cadenaResult2');
    let bodyResultado3 = document.getElementById('cadenaResult3');
    suma = Number(nota1)+Number(nota2)+Number(nota3);
    prom = suma/3;
    if(prom >= 3){
        bodyResultado1.innerText = 'Felicitaciones '+nombre+',<span> su nota es <span>'+prom.toFixed(2)+',pasaste la materia '+materia;
        //bodyResultado2.innerText = 
        //bodyResultado3.innerText = 
       // document.getElementById('cadenaResult2').classList.add('color1');
    }else if(prom < 3){
        bodyResultado1.innerText = 'Lo siento '+nombre+',';
        bodyResultado2.innerText = ' su nota es '+prom.toFixed(2)+',';
        bodyResultado3.innerText = 'No pasaste la materia '+materia;
        document.getElementById('cadenaResult2').classList.add('color1');
        document.getElementById('cadenaResult2').classList.add('color2');
    }
});

document.getElementById('btnAceptar').addEventListener('click', function () {
    document.getElementById('cadenaResult2').classList.remove('color1');
    document.getElementById('cadenaResult2').classList.remove('color2');
});