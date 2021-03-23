
var btn = document.getElementById("button_add")
var numcharacters = 0 + " caracteres "


function countChars(num_characters){
    numcharacters = num_characters.value;
 }


function press(){

    if(numcharacters <0 && numcharacters % 1 == 0 == false ){
        console.log(document.getElementById("character_num").innerHTML = "Debe ingresar numeros enteros positivos")
    }
    else{
        if(numcharacters <0 ){
            console.log(document.getElementById("character_num").innerHTML = "Debe ingresar numeros positivos")
        }
        else{
            if(numcharacters % 1 == 0 == false ){
                console.log(document.getElementById("character_num").innerHTML = "Debe ingresar numeros enteros")
            }
            else{
                if(numcharacters %2==0  & numcharacters >=0){
                    console.log(document.getElementById("character_num").innerHTML = "Par")
                }
                else{
                    console.log(document.getElementById("character_num").innerHTML = "Impar")
                }
            }
        }
    }
    

}


