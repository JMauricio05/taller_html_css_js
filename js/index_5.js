var boton = document.getElementById("button_add")
var num_caracteres = 0 + " caracteres "

function contar(num_caracter){
    num_caracteres = num_caracter.value;
}
function presionar(){
    if(num_caracteres <0 && num_caracteres % 1 == 0 == false ){
        console.log(document.getElementById("character_num").innerHTML = "Debe ingresar números enteros positivos")
    }
    else{
        if(num_caracteres <0 ){
            console.log(document.getElementById("character_num").innerHTML = "Debe ingresar números positivos")
        }
        else{
            if(num_caracteres % 1 == 0 == false ){
                console.log(document.getElementById("character_num").innerHTML = "Debe ingresar números enteros")
            }
            else{
                if(num_caracteres %2==0  & num_caracteres >=0){
                    console.log(document.getElementById("character_num").innerHTML = "Par")
                }
                else{
                    console.log(document.getElementById("character_num").innerHTML = "Impar")
                }
            }
        }
    }
}