function parimpar(obj){

    var array = document.getElementById("idnumero").value;
    var acomulador="";

    var pares=[];
    var impares=[];


    
    for(var j=0; j<array.length;j++){
        if(array[j]!= ","){
            acomulador+=array[j]
        }else{
            if(acomulador%2==0){
                pares.push(acomulador);
                document.getElementById('par').style.color = "blue";
                document.getElementById("par").innerHTML = pares+ " ES NUMERO PAR";
        
            }else {
                impares.push(acomulador);
                document.getElementById('impar').style.color = "green";
                document.getElementById("impar").innerHTML = impares+ " ES NUMERO IMPAR";
                
            }
             acomulador="";
        }
 
    } 
}
