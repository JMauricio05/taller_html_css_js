
function closeModal(idModal){
    document.getElementById(idModal).classList.add('modalClosed');
}

document.getElementById('btnBuscar').addEventListener('click', function () {
    document.getElementById('modalBusqueda').classList.remove('modalClosed');
    
    let textoBusc = document.getElementById('textoInput').value;
    let parraf = document.getElementById("parrafoImput").value;
    let bodyResultado = document.getElementById('cadenaResult');

    let remplazo = parraf.replaceAll(textoBusc,'<span>'+textoBusc+'</span>');
    bodyResultado.innerHTML = remplazo;  
    document.getElementById('divResult').classList.add('Rojo');
    
    
    
});
