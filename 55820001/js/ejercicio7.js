


function countNum1(num1_character) {
    num1 = num1_character.value;
}


function countNum2(num2_characters) {
    num2 = num2_characters.value;
}


function press() {



    if (num1 < 0 && num1 % 1 == 0 == false && num2 < 0 && num2 % 1 == 0 == false) {
        console.log(document.getElementById("character_num").innerHTML = "Los numeros " + num1 + " y " + num2 + " NO son enteros positivos ");
    }
    else {
        if (num1 < 0 && num1 % 1 == 0 == false && num2 < 0 == false && num2 % 1 == 0) {
            console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " NO es entero positivo ");
        }
        else {
            if (num2 < 0 && num2 % 1 == 0 == false && num1 < 0 == false && num1 % 1 == 0) {
                console.log(document.getElementById("character_num").innerHTML = "El numero " + num2 + " NO es entero positivo ");
            }
            else {
                if (num1 < 0 && num2 < 0) {
                    console.log(document.getElementById("character_num").innerHTML = "Los numeros " + num1 + " y " + num2 + " NO son positivos ");
                }
                else {
                    if (num1 < 0 && num2 < 0 == false) {
                        console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " NO es positivo ");
                    }
                    else {
                        if (num2 < 0 && num1 < 0 == false) {
                            console.log(document.getElementById("character_num").innerHTML = "El numero " + num2 + " NO es positivo ");
                        }
                        else {
                            if (num1 % 1 == 0 == false && num2 % 1 == 0 == false) {
                                console.log(document.getElementById("character_num").innerHTML = "Los numeros " + num1 + " y " + num2 + " NO son enteros ");
                            }
                            else {
                                if (num1 % 1 == 0 == false && num2 % 1 == 0) {
                                    console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " NO es entero ");
                                }
                                else {
                                    if (num2 % 1 == 0 == false && num1 % 1 == 0) {
                                        console.log(document.getElementById("character_num").innerHTML = "El numero " + num2 + " NO es entero ");
                                    }
                                    else {
                                        if (num1 % num2 === 0) {
                                            console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " es divisible por el numero " + num2);
                                        }
                                        else {
                                            if (num1 % num2 === 0 == false) {
                                                console.log(document.getElementById("character_num").innerHTML = "El numero " + num1 + " NO es divisible por el numero " + num2);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}








