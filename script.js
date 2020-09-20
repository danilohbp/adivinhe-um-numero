// O número é escolhido aleatoriamente
var num = 1 + Math.floor(Math.random() * 10);

// Referênciação ao campo de texto, botão e área de resultado
var campo = document.querySelector('#campoValor');
var botao = document.querySelector('#btnEnviar');
botao.addEventListener('click', verifica);
var resultado = document.querySelector('.resultado');

// Função para verificar se o jogador acertou ou errou o número
function verifica(){
	var valor = Number(campo.value);
	if (valor == num) {
		resultado.textContent = 'Você acertou!';
		resultado.style.backgroundColor = 'green';
		fimJogo();
	}
	else{
		resultado.textContent = 'Você errou. :(';
		resultado.style.backgroundColor = 'red';
	}
}

/* Assim que o jogador acertar é mostrado um botão para reiniciar o jogo
O campo de texto e botão de envio são desabilitados, para impedir que o jogador
continue a jogar com o mesmo número sorteado inalterado.*/

function fimJogo(){
	campo.disabled = true;
	botao.disabled = true;
	botaoReinicio = document.createElement('button');
	botaoReinicio.textContent = 'Reiniciar';
	botaoReinicio.style.fontSize = '28px';
	centralizar = document.querySelector('center');
	centralizar.appendChild(botaoReinicio);
	document.body.appendChild(centralizar);
	botaoReinicio.addEventListener('click', reiniciarJogo);
}

/*Esta função reinicia o jogo, reabilita o campo de texto e botão de enviar,
assim como gera de novo um número aleatório para ser adivinhado*/ 

function reiniciarJogo(){
	botaoReinicio.parentNode.removeChild(botaoReinicio);

	campo.disabled = false;
	botao.disabled = false;

	campo.value = '';
	resultado.textContent = '';
	resultado.style.backgroundColor = none;

	num = 1 + Math.floor(Math.random() * 10);
}
