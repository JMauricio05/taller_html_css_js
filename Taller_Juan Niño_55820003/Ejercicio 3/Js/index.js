let personas = [
    { nombre: 'Prueba 1', edad: 18 },
    { nombre: 'Prueba 2', edad: 4 },
    { nombre: 'Prueba 3', edad: 3 },
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
    elementHTML += '    <td>' + persona.edad + '</td>';
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
    let edad = Number(document.getElementById('edadInput').value);
    let persona = { 'nombre': nombre, 'edad': edad };
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
    let edad = Number (document.getElementById('edadInput').value);
    let persona= { 'nombre': nombre, 'edad': edad };
    personas[indexElementoSeleccionado] = persona;
    actualizarHtmlTbody();
}

function onClickEditar(index) {
    indexElementoSeleccionado = index - 1;
    let persona = personas[indexElementoSeleccionado];

    document.getElementById('modalFormulario').classList.remove('modalClosed');
    document.getElementById('tituloModalFormulario').innerText = 'Modificar Persona';
    document.getElementById('nombreInput').value = persona.nombre;
    document.getElementById('edadInput').value = persona.edad;
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
    document.getElementById('edadInput').value = '';
    operacion = 'registrar';
});

document.getElementById('btnCalcular').addEventListener('click', function () {
    document.getElementById('modalPromedio').classList.remove('modalClosed');
});
document.getElementById('btnCalcularpromedio').addEventListener('click', function () {
    let i = Number (document.getElementById('escoje').value) - 1 ;
    if (personas[i].edad >= 18) {
        document.getElementById('Resul_promedio').value="Hola " + personas[i].nombre + " eres mayor de edad"
    } else if (personas[i].edad >= 0){
        document.getElementById('Resul_promedio').value="Hola" + personas[i].nombre + "esta edad no es valida"  
    }else{
        document.getElementById('Resul_promedio').value="Hola" + personas[i].nombre + "eres menor de edad"
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