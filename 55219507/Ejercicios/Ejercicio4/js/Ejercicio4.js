
let suma = 0;
let prom = 0;
function validarInputs(name,materia,not1,not2,not3){
    let numeros = /[0-9]/;
    let nam = numeros.test(name);
    let mater = numeros.test(materia);
        if(nam){
            alert('Nombre invalido, no pueden ir numeros')
            return false;
        }else if(mater){
            alert('Materia invalida, no pueden ir numeros')
            return false;
        }else if(not1>5 || not1<0){
            alert('nota 1 invalida, el numero debe estar entre 0-5')
            return false;
        }else if(not2>5 || not2<0){
            alert('nota 2 invalida, el numero debe estar entre 0-5')
            return false;
        }else if(not3>5 || not3<0){
            alert('nota 3 invalida, el numero debe estar entre 0-5')
            return false;
        }else{
            return true;
        }
    
}

function closeModal(idModal){
    document.getElementById(idModal).classList.add('modalClosed');
}

document.getElementById('btnCalcular').addEventListener('click', function () {
    
    
    let nombre = document.getElementById('nombreInput').value;
    let materia = document.getElementById('materiaInput').value;
    let nota1 = document.getElementById('nota1Input').value;
    let nota2 = document.getElementById('nota2Input').value;
    let nota3 = document.getElementById('nota3Input').value;
    let bodyResultado = document.getElementById('cadenaResult');
    suma = Number(nota1)+Number(nota2)+Number(nota3);
    prom = suma/3;
    let validacion = validarInputs(nombre,materia,nota1,nota2,nota3);
    if(validacion){
        document.getElementById('modalFormulario').classList.remove('modalClosed');
        if(prom >= 3){
        document.getElementById('divResult').classList.add('colorV');
        bodyResultado.innerHTML = 'Felicitaciones '+nombre+',<span> su nota es '+prom.toFixed(2)+'</span>,pasaste la materia '+materia;
        }else if(prom < 3){
        document.getElementById('divResult').classList.add('colorR');
        bodyResultado.innerHTML = 'Lo siento '+nombre+',<span> su nota es '+prom.toFixed(2)+'</span>,no pasaste la materia '+materia;
        }
    }
    
});
