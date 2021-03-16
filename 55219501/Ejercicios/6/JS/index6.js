function buscar(obj){

    var buscar = document.getElementById("idbuscar").value;
    var parrafo  = document.getElementById("idparrafo").value;
    var final = document.getElementById("idfinal").value;
    
    if(parrafo.includes(buscar)){
        document.getElementById('idfinal').style.color = "red";
        document.getElementById("idfinal").innerHTML = parrafo;
  
    }
}