function clock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	document.getElementById("time").innerHTML = hours + ':' + minutes + ':'
			+ seconds;
}

window.onload = function() {
	setInterval(clock, 1000);
}
function date() {
	var date = new Date();
	var day = date.getDay();
	var month = date.getMonth();
	var year = date.getYear();
	document.getElementById("date").innerHTML = day + '/' + month + '/' + year;
}