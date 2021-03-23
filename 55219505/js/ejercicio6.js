document.getElementById('boton').addEventListener('click',function(){
    let cadena=document.getElementById('intext').value;
    let cadena2=document.getElementById('intext2').value;    
    let numero=document.getElementById('resul');
    var str = cadena2;
    var i;

  
            
        var res = str.replaceAll(cadena,("<span>"+cadena+"</span>")); 
        numero.innerHTML=res;
        str = document.getElementById("resul").innerHTML;
        document.getElementById('resul').classList.add('color')=this.textContent;

      
    });