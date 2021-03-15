document.getElementById('boton').addEventListener('click',function(){
let cadena=document.getElementById('intext').value;
let numero=document.getElementById('resul');
console.log(cadena);
numero.innerText=cadena.length;
});