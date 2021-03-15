let personas = [
    { nombre: 'Prueba 1', materia: 'lol',nota1: 2, nota2: 3, nota3: 4},
    { nombre: 'Prueba 1', materia: 'lol',nota1: 4, nota2: 5, nota3: 6},
    { nombre: 'Prueba 1', materia: 'lol',nota1: 4, nota2: 5, nota3: 6},
];
actualizarHtmlTbody();


let operacion = '';
let indexElementoSeleccionado = null;

function closeModal(idModal) {
    document.getElementById(idModal).classList.add('modalClosed');
}

function getTemplateElementTr(consecutivo, persona) {
    let elementHTML = '';
    elementHTML += '<tr>';
    elementHTML += '    <td>' + consecutivo + '</td>';
    elementHTML += '    <td>' + persona.nombre + '</td>';
    elementHTML += '    <td>' + persona.materia + '</td>';
    elementHTML += '    <td>' + persona.nota1 + '</td>';
    elementHTML += '    <td>' + persona.nota2 + '</td>';
    elementHTML += '    <td>' + persona.nota3 + '</td>';
    elementHTML += '    <td>';
    elementHTML += '        <button type="button" class="btn btn-primary" onclick="onClickEditar(' + consecutivo + ')">';
    elementHTML += '            <img src="resources/icons/edit.svg" alt="Editar" title="Editar">';
    elementHTML += '        </button>';
    elementHTML += '        <button type="button" class="btn btn-danger" onclick="onClickEliminar(' + consecutivo + ')">';
    elementHTML += '            <img src="resources/icons/delete.svg" alt="Eliminar" title="Eliminar">';
    elementHTML += '        </button>';
    elementHTML += '    </td>';
    elementHTML += '</tr>';
    return elementHTML;
}

function addPersona() {
    indexElementoSeleccionado = null;
    let nombre = document.getElementById('nombreInput').value;
    let materia = document.getElementById('materiaInput').value;
    let nota1 = Number (document.getElementById('nota1Input').value);
    let nota2 = Number (document.getElementById('nota2Input').value);
    let nota3 = Number (document.getElementById('nota3Input').value);
    let persona = { 'nombre': nombre, 'materia': materia, 'nota1': nota1,'nota2': nota2, 'nota3': nota3 };
    personas.push(persona);

    let tbodyPersonas = document.getElementById('tablaPersonas').getElementsByTagName('tbody')[0];
    if (personas.length == 1) {
        tbodyPersonas.innerHTML = '';
    }
    let elementHTML = getTemplateElementTr(personas.length, persona);
    tbodyPersonas.innerHTML += elementHTML;

}

function actualizarHtmlTbody() {
    let tbodyPersonas = document.getElementById('tablaPersonas').getElementsByTagName('tbody')[0];
    tbodyPersonas.innerHTML = '';
    personas.forEach((value, index) => {
        let elementHTML = getTemplateElementTr(index + 1, value);
        tbodyPersonas.innerHTML += elementHTML;
    });
    if (personas.length == 0) {
        tbodyPersonas.innerHTML = '<tr><td colspan="4" class="text-center">No hay materias registradas</td></tr>';
    }
}

function editPersona() {
    let nombre = document.getElementById('nombreInput').value;
    let materia = document.getElementById('materiaInput').value;
    let nota1 = Number (document.getElementById('nota1Input').value);
    let nota2 = Number (document.getElementById('nota2Input').value);
    let nota3 = Number (document.getElementById('nota3Input').value);
    let persona = { 'nombre': nombre, 'materia': materia, 'nota1': nota1,'nota2': nota2, 'nota3': nota3 };
    personas[indexElementoSeleccionado] = persona;
    actualizarHtmlTbody();
}

function onClickEditar(index) {
    indexElementoSeleccionado = index - 1;
    let persona = personas[indexElementoSeleccionado];

    document.getElementById('modalFormulario').classList.remove('modalClosed');
    document.getElementById('tituloModalFormulario').innerText = 'Modificar Persona';
    document.getElementById('nombreInput').value = persona.nombre;
    document.getElementById('materiaInput').value = persona.materia;
    document.getElementById('nota1Input').value = persona.nota1;
    document.getElementById('nota2Input').value = persona.nota2;
    document.getElementById('nota3Input').value = persona.nota3;
    operacion = 'editar';
}

function onClickEliminar(index) {
    indexElementoSeleccionado = null;
    personas.splice(index - 1, 1);
    actualizarHtmlTbody();
}


document.getElementById('btnRegistrar').addEventListener('click', function () {
    document.getElementById('modalFormulario').classList.remove('modalClosed');
    document.getElementById('nombreInput').value = '';
    document.getElementById('materiaInput').value = '';
    document.getElementById('nota1Input').value = '';
    document.getElementById('nota2Input').value = '';
    document.getElementById('nota3Input').value = '';
    operacion = 'registrar';
});

document.getElementById('btnCalcular').addEventListener('click', function () {
    document.getElementById('modalPromedio').classList.remove('modalClosed');
});
document.getElementById('btnCalcularpromedio').addEventListener('click', function () {
    let promedio = 0;
    let i = Number (document.getElementById('escoje').value) - 1 ;
    promedio= personas[i].nota1 + personas[i].nota2 + personas[i].nota3;
    console.log(promedio);   

    promedio=promedio/3;
    console.log(promedio);
    if (promedio >= 3) {
        document.getElementById('Resul_promedio').value="Felicitaciones "+ personas[i].nombre+ " su nota es " + promedio + 
        " \npasaste la materia "+ personas[i].materia;
    } else {
        document.getElementById('Resul_promedio').value="Lo siento "+ personas[i].nombre+ " su nota es " + promedio + 
        " \nNo pasaste la materia "+ personas[i].materia;  
    }
    


});
document.getElementById('formPersona').addEventListener('submit', function (event) {
    event.preventDefault();
    if (operacion == 'registrar') {
        addPersona();
    } else {
        editPersona();
    }

    closeModal('modalFormulario');
});