function buscar(obj){

    var buscar = document.getElementById("idbuscar").value;
    var parrafo  = document.getElementById("idparrafo").value;
    var final = document.getElementById("idfinal").value;
    
    var keywords = [parrafo.toString()];
    var pos = -1;

    let template =`<span style="background:yellow; color:red;">${buscar}</span>`;

    // uso foreach para recorrer cada elemento del array
    keywords.forEach(function(element){

    //en caso de existir se asigna la posicion
    pos = buscar.search(element.toString());
    
    document.getElementById("idfinal").innerHTML = parrafo;
    //si existe
     if(pos!=1){
        document.getElementById('idbuscar').style.color = "red";        
    }  
    });

    //en caso de que no exista
    if(pos===-1 && resultado===""){
        document.getElementById('idbuscar').style.color = "green";
    }

}