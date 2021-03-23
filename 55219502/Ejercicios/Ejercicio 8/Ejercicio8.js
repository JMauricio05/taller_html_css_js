function closeModal(idmodal){
    document.getElementById(idmodal).classList.add('modalClosed');
}
document.getElementById('btn-cal').addEventListener('click',function(){
    document.getElementById('modalPromedio').classList.remove('modalClosed');
    

        var array = document.getElementById("numero").value;
        var acomul="";
    
        var pares=[];
        var impares=[];
        
    
        for(var j=0; j<array.length;j++){ 
            if(array[j]== "."){
            }else{  
                if(array[j]!= ","){
                    acomul+=array[j]
                }else{
                    if(acomul%2==0){
                        pares.push(acomul);
                        document.getElementById('par').style.color = "blue";
                        document.getElementById("par").innerHTML = pares+ " Es numero par";
                
                    }else {
                        impares.push(acomul);
                        document.getElementById('impar').style.color = "green";
                        document.getElementById("impar").innerHTML = impares+ " Es numero impar";
                        
                    }
                    acomul="";
                }
            } 
        } 
    
    
})



