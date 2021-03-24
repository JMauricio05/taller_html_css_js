function Identcar(palaingr){
    Character=palaingr.value;
}
function press2(){
    if (Character % 1 == 0) {
        document.getElementById("Tiptxt").innerHTML="Numerico";
    }
    else {
        document.getElementById("Tiptxt").innerHTML="Texto";
    }
}