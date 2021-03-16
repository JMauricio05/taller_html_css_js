function closeModal(idmodal){
    document.getElementById(idmodal).classList.add('modalClosed');
}
document.getElementById('btn-cal').addEventListener('click',function(){
    document.getElementById('modalPromedio').classList.remove('modalClosed');
    let palabra = document.getElementById('txt').value;
    let cantidad = document.getElementById('carac');
    if(!Number(palabra)){
        cantidad.innerText="Es texto";
    }else{
        cantidad.innerText="Es numero";
    }
})