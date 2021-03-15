document.getElementById('btnCalcular').addEventListener('click', function () {
    let num = 0;
    let esPar = 0;
    num = Number (document.getElementById("palabraInput").value);
    esPar = num % 2;
    if (esPar == 0) {
        document.getElementById('Resul_caracteres').value="Par";
    } else {
        document.getElementById('Resul_caracteres').value="Impar";
    }
    
});