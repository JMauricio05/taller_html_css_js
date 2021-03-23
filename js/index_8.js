var ingreso;
var salida;
function prueba(txt_input) {
    ingreso = txt_input.value;
    salida = "";
    console.log("input: [" + ingreso + "]");
    var array = ingreso.split(",");
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        if (Number.isInteger(parseFloat(num)) && num % 1 == 0) {
            if (parseInt(num) % 2 == 0) {
                console.log("[" + num + "] es número par");
                salida =
                    salida + num + ' <span style="color: blue"> es número par </span>';
            } else {
                console.log("[" + num + "] es número impar");
                salida =
                    salida + num + ' <span style="color: rgb(9, 255, 0);"> es número impar </span>';
            }
        } else {
            console.log("[" + num + "] no es entero");
            salida =
                salida +
                num +
                ' <span style="color: red"> no es un número entero </span>';
        }
        salida = salida + "<br>";
    }
    console.log("res: " + salida);
    var respuesta = document.getElementById("output");
    respuesta.innerHTML = salida;
}
