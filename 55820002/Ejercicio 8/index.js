var numc=8
function ContarCaracter(palabras){
        numc=palabras.value.lenght
        document.getElementById('numCaracter').innerHTML=numc
}

function Num1(numdiv1){
    divs1=numdiv1.value
}
function Num2(numdiv2){
    divs2=numdiv2.value
}
function press7(){
    if(divs1%divs2===0){
        document.getElementById("divsr").innerHTML=('El numero '+divs1+' es divisibe por '+divs2;
    }
    else{
        document.getElementById("divsr").innerHTML=('El numero '+divs1+' no es divisibe por '+divs2;
    }
}