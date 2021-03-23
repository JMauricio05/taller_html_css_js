function contador1(num1_character) {
    num1 = num1_character.value;
}
function contador2(num2_characters) {
    num2 = num2_characters.value;
}
function presionar() {
    if (num1 < 0 && num1 % 1 == 0 == false && num2 < 0 && num2 % 1 == 0 == false) {
        console.log(document.getElementById("character_num").innerHTML = "Los números " + num1 + " y " + num2 + " no son enteros positivos ");
    }
    else {
        if (num1 < 0 && num1 % 1 == 0 == false && num2 < 0 == false && num2 % 1 == 0) {
            console.log(document.getElementById("character_num").innerHTML = "El número " + num1 + " no es entero positivo ");
        }
        else {
            if (num2 < 0 && num2 % 1 == 0 == false && num1 < 0 == false && num1 % 1 == 0) {
                console.log(document.getElementById("character_num").innerHTML = "El numero " + num2 + " NO es entero positivo ");
            }
            else {
                if (num1 < 0 && num2 < 0) {
                    console.log(document.getElementById("character_num").innerHTML = "Los números " + num1 + " y " + num2 + " no son positivos ");
                }
                else {
                    if (num1 < 0 && num2 < 0 == false) {
                        console.log(document.getElementById("character_num").innerHTML = "El número " + num1 + " no es positivo ");
                    }
                    else {
                        if (num2 < 0 && num1 < 0 == false) {
                            console.log(document.getElementById("character_num").innerHTML = "El número " + num2 + " no es positivo ");
                        }
                        else {
                            if (num1 % 1 == 0 == false && num2 % 1 == 0 == false) {
                                console.log(document.getElementById("character_num").innerHTML = "Los números " + num1 + " y " + num2 + " no son enteros ");
                            }
                            else {
                                if (num1 % 1 == 0 == false && num2 % 1 == 0) {
                                    console.log(document.getElementById("character_num").innerHTML = "El número " + num1 + "no es entero ");
                                }
                                else {
                                    if (num2 % 1 == 0 == false && num1 % 1 == 0) {
                                        console.log(document.getElementById("character_num").innerHTML = "El número " + num2 + " no es entero ");
                                    }
                                    else {
                                        if (num1 % num2 === 0) {
                                            console.log(document.getElementById("character_num").innerHTML = "El número " + num1 + " es divisible por el número " + num2);
                                        }
                                        else {
                                            if (num1 % num2 === 0 == false) {
                                                console.log(document.getElementById("character_num").innerHTML = "El número " + num1 + " no es divisible por el número " + num2);
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