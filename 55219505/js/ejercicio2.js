document.getElementById('boton').addEventListener('click',function(){
let cadena=document.getElementById('intext').value;
let numero=document.getElementById('resul');
console.log(cadena);
if(Number(cadena)){
    numero.innerText= typeof Number(cadena);
    
}else{
    numero.innerText= typeof cadena;
}

  
});