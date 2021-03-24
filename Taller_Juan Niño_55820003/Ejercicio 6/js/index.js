var txt = "";
var txt1 = "";
var busca = "";
var resp = "";

document.getElementById('btnRegistrar').addEventListener('click', function () {
    txt = document.getElementById('parrafoInput').value;
    txt = txt.toLowerCase(); 
    console.log(txt)
 });
document.getElementById('btnCalcular').addEventListener('click',function() {
    txt1 =  document.getElementById('PalabraInput').value;
    txt1 = txt1.toLowerCase();
    busca = txt.replaceAll(txt1);
    resp = txt.replaceAll(busca,'<span style="color: red;"></span>');
    document.getElementById('Resul_buscar').value=resp;
    var txtcolor = document.getElementById('color_parrafo');
    txtcolor.innerHTML= resp;
    //profe no se por que no me funciono el cambio de color
});
