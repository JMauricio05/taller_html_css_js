
document.getElementById('btnCalcular').addEventListener('click', function () {
    let palabra = "";
    let cantidadcaracteres = 0;
    palabra = document.getElementById("palabraInput").value;
    cantidadcaracteres = palabra.length;
    document.getElementById('Resul_caracteres').value=cantidadcaracteres;
});
