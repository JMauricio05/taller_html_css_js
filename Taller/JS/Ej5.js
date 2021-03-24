var btn = document.getElementById("ParOimp")
var numcharacters = 0 + " caracteres "


function numparoim(num_characters){
    numparoimp = num_characters.value;
 }


function press5(){

    if(numparoimp <0 && numcharacters % 1 == 0 == false ){
        document.getElementById("ParO").innerHTML = "Debe ingresar numeros enteros positivos"
    }
    else{
        if(numparoimp <0 ){
            document.getElementById("ParO").innerHTML = "Debe ingresar numeros positivos"
        }
        else{
            if(numparoimp % 1 == 0 == false ){
                document.getElementById("ParO").innerHTML = "Debe ingresar numeros enteros"
            }
            else{
                if(numparoimp %2==0  & numparoimp >=0){
                    document.getElementById("ParO").innerHTML = "Par"
                }
                else{
                    document.getElementById("ParO").innerHTML = "Impar"
                }
            }
        }
    }


}