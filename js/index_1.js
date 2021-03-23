var numcaracteres = 0 + " caracteres ";

function contar(num_caracteres){
    numcaracteres = num_caracteres.value.length + " caracteres ";
}
function presionar(){
    console.log(document.getElementById("num_caracter").innerHTML = numcaracteres)
}