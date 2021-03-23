var texto;
var resultado;

function prueba(text_search){
    texto = document.getElementById('txt_input').textContent;
    search = text_search.value;
    resultado = texto.replaceAll(search,'<span style="color: red">$&</span>');
    console.log("Texto: [" + texto+  "]" + "    |   Búsqueda: [" + search +"]" +
    "   |   Res: [" + resultado +"]");
    var textAreaB = document.getElementById("txt_input");
    textAreaB.innerHTML  = resultado;
}