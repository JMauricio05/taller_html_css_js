document.getElementById('boton').addEventListener('click',function(){
let cadena=document.getElementById('intext').value;
let numero=document.getElementById('resul');




if(Number(cadena)<0){
    numero.innerText="Debe ingresar números positivos";
}else{
    if (numero % 1== 0) {
        numero.innerText="Debe ingresar números enteros";
    } else {
        if (Number(cadena%2)==0){
            console.log(cadena);
            numero.innerText="El numero es par";
            
        }else{
            numero.innerText="El numero es impar";
        } 
    }
   
    };
});
