var btn = document.getElementById("button_add");
var nombre_salida;
var promedio;

function persona(nombre_re){
    nombre_salida =  nombre_re.value;
}
function materia(materia_re){
    materia_salida =  materia_re.value;
}
function contador1(nota1_re){
    nota1_salida = parseFloat(nota1_re.value);
}
function contador2(nota2_re){
    nota2_salida =  parseFloat(nota2_re.value);
}
function contador3(nota3_re){
    nota3_salida =  parseFloat(nota3_re.value);
}

function presionar(){
    suma = nota1_salida + nota2_salida  + nota3_salida 
    promedio = suma/3
    if(promedio < 3){
        console.log(document.getElementById("character_num").innerHTML = "Lo siento "+ nombre_salida+ ", " + '<span style="color: red"> su nota es </span>' + promedio.toFixed(2)+ ", No pasaste la materia "+ materia_salida  );
    }
    else if(promedio >= 3) {
        console.log(document.getElementById("character_num").innerHTML = "Felicitaciones "+ nombre_salida+ ", " + '<span style="color: rgb(9, 255, 0);"> su nota es </span>' + promedio.toFixed(2)+ ", Pasaste la materia "+ materia_salida  );
    }
    else{
        console.log(document.getElementById("character_num").innerHTML = "Ingrese valores validos ");
    }
}