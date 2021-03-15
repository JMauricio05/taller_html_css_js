function parimpar(obj){

    var array = document.getElementById("idnumero").value;
    

    var pares=[];
    var impares=[];
    
    /*var patron = /,/g;
    var nuevoValor = "";
    impares.replace[patron, nuevoValor];*/

    
    for(var j=0; j<array.length;j++){
        if(array[j]%2==0){
            pares.push(array[j]);
            document.getElementById('par').style.color = "blue";
            document.getElementById("par").innerHTML = pares+ " ES NUMERO PAR";
    
        }else {
            impares.push(array[j]);
            document.getElementById('impar').style.color = "green";
            document.getElementById("impar").innerHTML = impares+ " ES NUMERO IMPAR";
            
        } 
    } 
}
