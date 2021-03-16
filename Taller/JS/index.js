var numc=0
function ContarCaracter(palabras){
    numc=palabras.value.length
    document.getElementById("numCaracter").innerHTML=numc
}

function Num1(numdiv1){
    divs1 = numdiv1.value;
}
function Num2(numdiv2){
    divs2 = numdiv2.value;
}
function press7(){
    if (divs1%divs2===0) {
        console.log(document.getElementById("divsr").innerHTML)="El numero "+ divs1+" Es divisible por"+divs2;
    }
    else {
        console.log(document.getElementById("divsr").innerHTML)="El numero "+ divs1+" No es divisible por"+divs2;
    }
}