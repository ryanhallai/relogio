let corBackground = document.querySelector('body');
let corAtualBG = corBackground.className;
let botao = document.querySelector('button');
let corTexto = document.querySelector('.preto');
let corAtualTexto = corTexto.className;
let corImagem = document.querySelector('img');

console.log(corAtualTexto);
function mudaBackground() {
	corBackground.classList.remove(`${corAtualBG}`);

	if (corAtualBG == 'BGbranco') {
		corBackground.classList.add(`BGpreto`);
		corAtualBG = `BGpreto`;
		corImagem.classList.add(`IMGbranco`);
	} else {
		if (corAtualBG == 'BGpreto') {
			corBackground.classList.add(`BGbranco`);
			corAtualBG = `BGbranco`;
			corImagem.classList.remove(`IMGbranco`);
		}
	}
}
function mudaCorTexto() {
	corTexto.classList.remove(`${corAtualTexto}`);

	if (corAtualTexto == 'preto') {
		corTexto.classList.add(`branco`);
		corAtualTexto = `branco`;
	} else {
		if (corAtualTexto == 'branco') {
			corTexto.classList.add('preto');
			corAtualTexto = `preto`;
		}
	}
}

botao.addEventListener('click', () => {
	mudaBackground();
	mudaCorTexto();
});
