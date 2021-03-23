var txt_in;
var txt_out;


function test(txt_input) {
    txt_in = txt_input.value;
    txt_out = "";

    console.log("input: [" + txt_in + "]");

    //var inp = "1,10,Clark,2.5,Rohn,Alice,3";

    var inpArr = txt_in.split(",");

    console.log(inpArr);

    for (var i = 0; i < inpArr.length; i++) {
        var num = inpArr[i];

        if (Number.isInteger(parseFloat(num)) && num % 1 == 0) {

            if (parseInt(num) % 2 == 0) {
                console.log("[" + num + "] ES NUMERO ENTERO PAR");

                txt_out =
                    txt_out + num + ' <span style="color: blue"> es numero par </span>';
            } else {
                console.log("[" + num + "] ES NUMERO ENTERO IMPAR");
                txt_out =
                    txt_out + num + ' <span style="color: green"> es numero impar </span>';
            }
        } else {
            console.log("[" + num + "] NO ES NUMERO ENTERO");

            txt_out =
                txt_out +
                num +
                ' <span style="color: red"> no es un numero entero </span>';
        }

        txt_out = txt_out + "<br>";
    }

    console.log("res: " + txt_out);

    var textRes = document.getElementById("output");
    textRes.innerHTML = txt_out;
}
