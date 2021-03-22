document.getElementById('boton').addEventListener('click',function(){
let cadena=document.getElementById('intext').value;
let materia=document.getElementById('intextmateria').value;
let nota1=document.getElementById('innumber1').value;
let nota2=document.getElementById('innumber2').value;
let nota3=document.getElementById('innumber3').value;
let numero=document.getElementById('resul');

let promedio=(Number(nota1)+Number(nota2)+Number(nota3))/3;

if (Number(promedio)<3){
    document.getElementById('resul').classList.add('color1')
    numero.innerHTML="Hola "+cadena+", Su nota es <span>"+promedio.toFixed(2)+"</span>, perdiste "+materia;

}else{
    document.getElementById('resul').classList.add('color2')
    numero.innerHTML="Hola "+cadena+", Su nota es <span>"+promedio.toFixed(2)+"</span>, Pasaste "+materia;
}
});