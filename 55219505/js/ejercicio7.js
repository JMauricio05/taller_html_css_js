document.getElementById('boton').addEventListener('click',function(){
    let cadena=document.getElementById('intext').value;
    let cadena2=document.getElementById('intext2').value;
    let numero=document.getElementById('resul');
    
        
    if (cadena%1!=0 ){
        numero.innerHTML="El numero "+cadena+" no es entero";

    }else{
        if (cadena2%1!=0 ){
            numero.innerHTML="El numero "+cadena2+" no es entero";
    
        }else{

            if (cadena<0){
                numero.innerHTML="El numero "+cadena+" no es positivo";
        
            }else{

                if (cadena2<0){
                    numero.innerHTML="El numero "+cadena2+" no es positivo";
            
                }else{
                    
                 if(cadena%cadena2==0){
                    console.log(cadena);
                    numero.innerHTML="El numero "+cadena+" es divisible entre "+cadena2;
                 }else{
                    numero.innerHTML="El numero "+cadena+" no es divisible entre "+cadena2;
                 }   



                }
                
                
            }
                         

        }
         
        


    }
    });

    