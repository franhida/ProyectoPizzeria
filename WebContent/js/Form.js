function check() {
	var vname, vfname, vdni, vphobe, vemail, vproduct;
	var trigger = "Campo incorrecto.";
	var ok = true;
	var fields = "Rellene los siguientes campos:";
	var end = "Formulario completado";
	function checkdni(dni) {
		var num;
		var typedLetter;
		var letter;
		var regdni = /^\d{8}[a-zA-Z]$/
		if (regdni.test(dni) == true) {
			numero = dni.substr(0, dni.length - 1);
			typedLetter = dni.substr(dni.length - 1, 1);
			num = num % 23;
			letter = 'TRWAGMYFPDXBNJZSQVHLCKET';
			letter = letter.substring(num, num + 1);
			if (letter != typedLetter.toUpperCase()) {
				alert('Dni erroneo, la letra del NIF no se corresponde');
			} else {
				alert('Dni correcto');
			}
		} else {
			alert('Dni erroneo, formato no válido');
		}
	}
	function checkemail(email) {
		var regemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		if (!expr.test(email)) {
			alert("Error: La dirección de correo " + email + " es incorrecta.");
		} else {
			alert("La dirección de correo es válida")
		}
	}
	if ((order.name.value == "") || (order.name.value == trigger)) {
		order.name.value = trigger;
		ok = false;
		fields += "\n Nombre";
	}
	if ((order.fname.value == "") || (order.fname.value == trigger)) {
		order.fname.value = trigger;
		ok = false;
		fields += "\n Primer Apellido";
	}
	if ((order.phone.value == "") || (order.phone.value == trigger)) {
		order.phone.value = trigger;
		ok = false;
		fields += "\n Teléfono"
	}
}