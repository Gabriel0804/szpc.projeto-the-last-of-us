// Passo 1 - Pegar o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - Identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Passo 3 - Desativar o botão selecionado anterior
        desativarBotaoSelecionado();

        // Passo 4 - Marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);

        // Passo 5 - Esconder a imagem ativa de fundo 
        esconderImagemAtiva();

        // Passo 6 - Apresentar imagem de fundo correspondente ao botão clicado
        apresentarImagemDeFundo(indice);
    })
})

function apresentarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

