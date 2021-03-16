
var btn = document.getElementById("button_add")
var numcharacters = 0 + " caracteres "


function countChars(num_characters){
    numcharacters = num_characters.value;
 }


function press(){
     if(numcharacters <0 ){
        console.log(document.getElementById("character_num").innerHTML = "Debe ingresar numeros positivos")
    }
    else if(numcharacters %2==0  & numcharacters >=0){
        console.log(document.getElementById("character_num").innerHTML = "Par")
    }
    else if(numcharacters %2==1 & numcharacters >=0 ){
        console.log(document.getElementById("character_num").innerHTML = "Impar")
    }
    else{
    console.log(document.getElementById("character_num").innerHTML = "Debe ingresar numeros enteros")
    }

}
     

