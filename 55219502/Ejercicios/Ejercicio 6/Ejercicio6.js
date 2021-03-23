function closeModal(idmodal){
    document.getElementById(idmodal).classList.add('modalClosed');
}
document.getElementById('btn-cal').addEventListener('click',function(){
    document.getElementById('modalPromedio').classList.remove('modalClosed');
    let bus = document.getElementById('letra').value;
    let parrafo = document.getElementById('parrafo').value;
    let resul = document.getElementById('carac');

    let remplazo = parrafo.replaceAll(bus,'<span>'+bus+'</span>');
    resul.innerHTML = remplazo;  
    document.getElementById('res').classList.add('Rojo');
});