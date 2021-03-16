//ejercicio 1
function getID(id){
    return document.getElementById(id).value;
}
function innerHTML(id,result){
    return document.getElementById(id).innerHTML=result;
}
function contador(){
    setInterval(function(){
        var c = getID("contar");
          
            innerHTML("caracteres", c.length); 
               
           
        }, 0000);
}
