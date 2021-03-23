var boton = document.getElementById("button_add");
var num_caracteres ;
var persona = "";

function nombre_re(name_character){
    persona = name_character.value;
}

function contar(num_characters){
    num_caracteres = num_characters.value;
}

function presionar(){
    if(num_caracteres  >=18 ){
        console.log(document.getElementById("character_num").innerHTML = "Hola "+ persona+ " eres mayor de edad");
    }
    else if(num_caracteres  <=0 ) {
        console.log(document.getElementById("character_num").innerHTML = "No es una edad valida");
    }
    else if(num_caracteres  <18  ){
        console.log(document.getElementById("character_num").innerHTML = "Hola "+ persona+ " eres menor de edad");
    }
}