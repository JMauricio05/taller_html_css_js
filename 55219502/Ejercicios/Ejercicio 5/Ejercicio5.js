function closeModal(idmodal){
    document.getElementById(idmodal).classList.add('modalClosed');
}
document.getElementById('btn-cal').addEventListener('click',function(){
    document.getElementById('modalPromedio').classList.remove('modalClosed');
    let numero = document.getElementById('number').value;
    let resultado = document.getElementById('carac'); 
    if(numero%2==0){
        resultado.innerText="par"
    }
    else if (numero < 0){
        resultado.innerText="Debe ingresar números positivos"
    }
    else{
        resultado.innerText="impar"
    }
})