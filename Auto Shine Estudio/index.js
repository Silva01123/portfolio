// Seleciona a imagem do carro
const imagemCarro = document.querySelector('.imagem-carro');

// Função para verificar se a imagem está visível na tela
function verificarVisibilidade() {
    const posicao = imagemCarro.getBoundingClientRect().top; // Pega a posição da imagem em relação ao topo da tela
    const alturaTela = window.innerHeight; // Altura visível da janela

    if (posicao < alturaTela * 0.75) { // Se a imagem estiver 75% visível na tela
        imagemCarro.classList.add('mostrar'); // Adiciona a classe que faz o efeito de aparecer
    }
}

// Evento que verifica o scroll e ativa a função
window.addEventListener('scroll', verificarVisibilidade);

// Chamada inicial para o caso da imagem já estar visível ao carregar a página
verificarVisibilidade();
