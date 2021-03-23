var txt;
var indx;
var res;


function test(text_search){
  
  
  txt = document.getElementById('txt_input').textContent;
  
  search = text_search.value;
     
 res = txt.replaceAll(search,'<span style="color: red">$&</span>');
 
 
 
 console.log("Texto: [" + txt+  "]" + "    |   Busqueda: [" + search +"]" +
 "   |   Res: [" + res +"]");
 
  
var textAreaB = document.getElementById("txt_input");
textAreaB.innerHTML  = res;
  
 
 
}


