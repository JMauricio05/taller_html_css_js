
var btn = document.getElementById("button_add");
var numcharacters ;
var namee = "";


function countName(name_character){
    namee = name_character.value;
}

function countChars(num_characters){
    numcharacters = num_characters.value;
 }


function press(){
    if(numcharacters  >=18 ){
        console.log(document.getElementById("character_num").innerHTML = "Hola "+ namee+ " eres mayor de edad");
    }
    else if(numcharacters  <=0 ) {
        console.log(document.getElementById("character_num").innerHTML = "No es una edad valida");
    }
    else if(numcharacters  <18  ){
        console.log(document.getElementById("character_num").innerHTML = "Hola "+ namee+ " eres menor de edad");
    }

    }
    



