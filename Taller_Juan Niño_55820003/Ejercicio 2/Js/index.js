document.getElementById('btnCalcular').addEventListener('click', function () {
    let palabra = "";
    palabra = Number (document.getElementById("palabraInput").value);
    console.log(palabra);
    if (palabra == NaN) {
        document.getElementById('Resul_caracteres').value="Texto";
        console.log("texto");
    } else {
        document.getElementById('Resul_caracteres').value="Número";  
        console.log("num");
    }
    
});