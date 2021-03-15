function divisible(obj){

    var numeroaa = document.getElementById("numeroa").value;
    var numerobb = document.getElementById("numerob").value;

    if (numeroaa && numerobb - Math.floor(obj.value) == 0) {
        if (numeroaa%numerobb == 0){
            document.getElementById("charNum").innerText = "EL NUMERO: "+numeroaa + " ES DIVISIBLE ENTRE EL NUMERO " + numerobb;
        }
        else
            document.getElementById("charNum").innerText = "EL NUMERO: "+numeroaa + " NO ES DIVISIBLE ENTRE EL NUMERO " + numerobb;
        
        
    }else {
        document.getElementById("charNum").innerText="LOS NUMEROS: "+" "+numeroaa+" "+" "+numerobb +" "+" NO SON ENTEROS"; 
            
        if (numeroaa - Math.floor(numeroaa) == 0){
            if (numerobb - Math.floor(numerobb) == 0){
            }else
                document.getElementById("charNum").innerText="EL NUMERO: "+numerobb+" NO ES ENTERO";
        }else
            document.getElementById("charNum").innerText="EL NUMERO: "+numeroaa +" NO ES ENTERO";
    }


    if (numeroaa<0 && numerobb<0){
        document.getElementById("charNum").innerText="LOS NUMEROS: "+" "+numeroaa+" "+" "+numerobb+" "+" NO SON ENTEROS POSITIVOS";
        
    }else{
        if(numeroaa <0)
        document.getElementById("charNum").innerText="EL NUMERO: "+" "+numeroaa+" "+" ES NO ES ENTERO POSITIVO";
            if(numerobb <0)
            document.getElementById("charNum").innerText="EL NUMERO: "+" "+numerobb+" "+" ES NO ES ENTERO POSITIVO";
    }

    if (obj.value == ""){
        document.getElementById("charNum").innerText="INGRESE NUMEROS";
    }
    
}
