var Total;
function NombEst(Est){
    NombreEst=Est.value
}
function Materia(Mate){
    Mater=Mate.value
}
function Nota1(not1){
    N1=parseFloat(not1.value);
}
function Nota2(not2){
    N2=parseFloat(not2.value);
}
function Nota3(not3){
    N3=parseFloat(not3.value);
}
function adnota(){
    Sumatoria=N1+N2+N3;
    Total=Sumatoria/3
    if(Total < 3){
        document.getElementById("matnot").innerHTML = "Lo siento "+ NombreEst+ ", tu nota es "+ Total+ ", NO pasaste la materia "+ Mater;
    }
    else if(Total >= 3) {
        document.getElementById("matnot").innerHTML = "Felicitaciones "+ NombreEst+ ", tu nota es "+ Total+ ", Pasaste la materia "+ Mater;
    }
    else{
        document.getElementById("matnot").innerHTML = "Ingrese valores validos ";
    }

    
}