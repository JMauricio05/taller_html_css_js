document.getElementById('btnCalcular').addEventListener('click', function () {
    let text = document.getElementById('palabraInput').value;
    let tbodyCaracter = document.getElementById('caracteres');
    tbodyCaracter.innerText= text.length;
});