


function countNum1(num1_character) {
    num1 = num1_character.value;
}


function countNum2(num2_characters) {
    num2 = num2_characters.value;
}


function press() {

    if (num1 < 0) {
        console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " NO es positivo ");
    }
    else {
        if (num2 < 0) {
            console.log(document.getElementById("character_num").innerHTML = "El numero " + num2 + " NO es positivo ");
        }
        else {
            if (num1 % 1 == 0) {
                if (num2 % 1 == 0) {
                    if (num1 % num2 === 0) {
                        console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " es divisible por el numero " + num2);
                    }
                    else {
                        console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " NO es divisible por el numero " + num2);
                    }
                }
                else {
                    console.log(document.getElementById("character_num").innerHTML = "El numero " + num2 + " NO es entero ");
                }
            }
            else {
                console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " NO es entero ");
            }
        }
    }
}









