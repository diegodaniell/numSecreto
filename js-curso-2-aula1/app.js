//estudando funções e manipulação
//let titulo = document.querySelector('h1');
//titulo.innerHTML =  'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, texto) {   
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero entre 1 e 10');

function verificarChute() {
    console.log('O botão foi clicado!');
}