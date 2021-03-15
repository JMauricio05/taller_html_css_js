function determinar(obj){

		const negativo = '-';
	
		if (obj.value - Math.floor(obj.value) == 0) {
			valor=parseInt(document.getElementById("idnumero").value);
			var tipo=(valor%2)?"IMPAR":"PAR";

			document.getElementById("charNum").innerText="NUMERO INGRESADO: "+"("+valor+")"+" ES: "+tipo;
		} else {
			document.getElementById("charNum").innerText="DEBE INGRESAR NUMEROS ENTEROS ";	
		}
		if (obj.value <0){
		document.getElementById("charNum").innerText="DEBE INGRESAR NUMEROS ENTEROS POSITIVOS";
		}
	}