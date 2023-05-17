let horas = document.querySelector('#h');
let minutos = document.querySelector('#m');
let segundos = document.querySelector('#s');

function horario() {
	let hoje = new Date();
	let horaAtual = hoje.getHours();
	let minutoAtual = hoje.getMinutes();
	let segundosAtual = hoje.getSeconds();

	if (horaAtual % 10 != horaAtual) {
		horas.innerHTML = `${horaAtual}`;
	} else {
		horas.innerHTML = `0${horaAtual}`;
	}
	if (minutoAtual % 10 != minutoAtual) {
		minutos.innerHTML = `${minutoAtual}`;
	} else {
		minutos.innerHTML = `0${minutoAtual}`;
	}
	if (segundosAtual % 10 != segundosAtual) {
		segundos.innerHTML = `${segundosAtual}`;
	} else {
		segundos.innerHTML = `0${segundosAtual}`;
	}
}

horario();

setInterval(() => {
	horario();
}, 1000);
