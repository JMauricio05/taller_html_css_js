function validarMateria(){
    let nombre = document.getElementById('nombreId').value;
    let materia = document.getElementById('materiaId').value;
    var N1 = document.getElementById('nota1').value;
    var N2 = document.getElementById('nota2').value;
    var N3 = document.getElementById('nota3').value;

    var prom = (parseFloat(N1)+parseFloat(N2)+parseFloat(N3))/3

    let x= "";
    let l= "";
    if(prom>=3){
        l = "su nota es "+ prom
        x = "Felicitaciones " + nombre + ", "+ l +", pasaste la materia de "+materia
        console.log(x);
        document.getElementById('validado').style.color ='green';
        
    }else{
        l = "su nota es "+ prom
        x = "Lo siento " + nombre +", "+ l + ", perdiste la materia de "+materia
        console.log(x);
        document.getElementById('validado').style.color ='red';
    }
    document.getElementById('validado').innerHTML = x;
    
}