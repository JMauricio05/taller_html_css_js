document.getElementById('boton').addEventListener('click',function(){
    
    let cadena = document.getElementById('intext').value;
    let numero=document.getElementById('resul');
    let numero2=document.getElementById('resul2');
    let divisiones = cadena.split(",");
  

    console.log(divisiones);
    
    let pares=[];
    let impares=[];

    var i;

    for (i = 0; i < divisiones.length; i++) {
        
        if (Number(divisiones[i]%2)==0){
            
            pares.push(divisiones[i]);
            
          
        }else{
            if (Number(divisiones[i]%1)==0){
            
                impares.push(divisiones[i]);
                
              
            }else{
                
                alert("Error 69: Solo puede agregar numeros enteros");
                
                
                
            }  


            
            
        } 
    }

    console.log(pares);
    console.log(impares);
    numero.innerText=""+pares+" Son pares";
    numero2.innerText=""+impares+" Son inpares";
   
    });
    