document.getElementById('boton').addEventListener('click',function(){
let cadena=document.getElementById('intext').value;
let edad=document.getElementById('innumber').value;
let numero=document.getElementById('resul');

console.log(cadena);
console.log(edad);
if (Number(edad)>=18){

    numero.innerText="Hola "+cadena+" eres mayor de edad";

}else{
    numero.innerText="Hola "+cadena+" eres menor de edad";
}
});