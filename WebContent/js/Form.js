function check() {
	var trigger = "Campo incorrecto.";
	var ok = true, dniok = false, emailok = false;
	var fields = "Rellene los siguientes campos:";
	var end = "Su pedido ha sido tramitado, en 1 hora le llegará";
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
		fields += "\n Teléfono";
	}
	if ((order.DNI.value == "") || (order.DNI.value == trigger)) {
		ok = false;
		fields += "\n DNI";
	} else {
		checkdni(order.DNI.value);
	}
	if ((order.mail.value == "") || (order.mail.value == trigger)) {
		ok = false;
		fields += "\n Email"
	} else {
		checkemail(order.mail.value);
	}
	function checkdni(dni) {
		var num;
		var typedLetter;
		var letter;
		var regdni;
		regdni = /^\d{8}[a-zA-Z]$/;
		if (regdni.test(dni) == true) {
			num = dni.substr(0, dni.length - 1);
			typedLetter = dni.substr(dni.length - 1, 1);
			num = num % 23;
			letter = 'TRWAGMYFPDXBNJZSQVHLCKET';
			letter = letter.substring(num, num + 1);
			if (letter != typedLetter.toUpperCase()) {
				alert("Dni erroneo, la letra del NIF no se corresponde");

			} else {
				alert("DNI correcto.");
				dniok = true;
			}
		} else {
			alert("Dni erroneo, formato no válido");
		}
	}
	function checkemail(email) {
		var regemail;
		regemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (regemail.test(email)) {
			alert("La dirección de correo es válida");
			emailok = true;
		} else {
			alert("Error: La dirección de correo " + email + " es incorrecta.");
		}
	}
	if (ok && dniok && emailok) {
		alert(end);
	} else {
		alert(fields);
	}
}