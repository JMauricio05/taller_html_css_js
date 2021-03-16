function closeModal(idmodal){
    document.getElementById(idmodal).classList.add('modalClosed');
}

document.getElementById('btn-cal').addEventListener('click',function(){
document.getElementById('modalPromedio').classList.remove('modalClosed');
    let nombre = document.getElementById('nombre').value;
    let nombreM = document.getElementById('nombreM').value;
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    let resul =  (Number(nota1) +Number(nota2)+ Number(nota3)) / 3;
    let resultado = document.getElementById('carac'); 
    let resultado2 = document.getElementById('carac2');
    let resultado3 = document.getElementById('carac3');
    
    if(resul>=3){
        resultado.innerText ="Felicitaciones " + nombre +","; 
        resultado2.innerText ="su nota es " + resul +",";
        resultado3.innerText ="pasaste la materia " + nombreM;
        document.getElementById('carac2').classList.add('verde');
    }
    else {
        resultado.innerText ="lo siento " + nombre+","; 
        resultado2.innerText ="su nota es " + resul+",";
        resultado3.innerText ="no pasaste la materia " + nombreM;
        document.getElementById('carac2').classList.add('rojo');

    }
})