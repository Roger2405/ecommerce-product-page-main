const botaoCarrinho = document.querySelector('.cabecalho__carrinho');

const botaoAcrescimo = document.querySelector('#botaoCarrinho-plus');
var elementoQuantidade = document.querySelector('.carrinho__quantidade--texto');
const botaoDecrescimo = document.querySelector('#botaoCarrinho-minus');

const botaoAdd = document.querySelector('.carrinho__botao');
const carrinhoPopUp = document.querySelector('.carrinho__popup');
const divCarrinhoConteudo = document.querySelector('.carrinho__popup--conteudo');

const textoCarrinhoVazio = document.querySelector('.texto-carrinhoVazio');

var quantidade;

botaoCarrinho.addEventListener('click', () => {
    carrinhoPopUp.classList.toggle('hide');
})

botaoAcrescimo.addEventListener('click', aumentaPedido);
botaoDecrescimo.addEventListener('click', diminuiPedido);

botaoAdd.addEventListener('click', adicionaPedido);


function aumentaPedido() {
    atualizaQuantidade(obtemQuantidade() + 1);
}

function diminuiPedido() {
    atualizaQuantidade(obtemQuantidade() - 1);
}

function obtemQuantidade() {
    quantidade = elementoQuantidade.textContent;
    quantidade = parseInt(quantidade);
    return quantidade;
}

function atualizaQuantidade(novaQuantidade) {
    if(novaQuantidade >=0) {
        elementoQuantidade.textContent = novaQuantidade;
    }
}

function adicionaPedido() {
    if(obtemQuantidade() === 0) {
        return;
    }
    //apaga o contaúdo anterior
    divCarrinhoConteudo.innerHTML = "";

    const imagemDoProduto = document.createElement('img');
    imagemDoProduto.src = document.querySelectorAll('.thumbnail')[0].getAttribute('src');
    imagemDoProduto.classList.add('pedido__imagem');

    const divInfo = montaInfo();

    const botaoExcluir = document.createElement('img');
    botaoExcluir.src = '../images/icon-delete.svg';
    botaoExcluir.classList.add('pedido__excluir');
    botaoExcluir.addEventListener('click', excluirPedido);

    const divPedido = document.createElement('div');
    divPedido.classList.add('pedido');
    
    divPedido.appendChild(imagemDoProduto);
    divPedido.appendChild(divInfo);
    divPedido.appendChild(botaoExcluir);

    const elementoBotaoCheckout = document.createElement('button');
    elementoBotaoCheckout.classList.add('botao-laranja');
    elementoBotaoCheckout.classList.add('elemento-arredondado');
    elementoBotaoCheckout.textContent = 'Checkout';

    divCarrinhoConteudo.appendChild(divPedido);
    divCarrinhoConteudo.appendChild(elementoBotaoCheckout);
    
}

function montaInfo() {
    const divInfo = document.createElement('div');
    divInfo.classList.add('pedido__info');
    
    const buscaPeloNome = document.getElementsByName('nomeProduto');
    const elementoNome = document.createElement('p');
    elementoNome.textContent = buscaPeloNome[0].textContent;

    const buscaPeloPreco = document.getElementsByName('precoProduto');
    const textoPrecoDoProduto = buscaPeloPreco[0].textContent;
    var precoDoProduto = textoPrecoDoProduto.replace('$', '');
    
    //variáveis prontas para efetuar as operações
    const intPreco = parseFloat(precoDoProduto);
    quantidade = obtemQuantidade();

    const elementoPreco = document.createElement('p');
    elementoPreco.textContent = `$${intPreco.toFixed(2)} x ${quantidade} `;

    const elementoPrecoTotal = document.createElement('b');
    elementoPrecoTotal.textContent = `$${(intPreco * quantidade).toFixed(2)}`;
    elementoPrecoTotal.classList.add('texto-destaque');

    elementoPreco.appendChild(elementoPrecoTotal);
    
    divInfo.appendChild(elementoNome);
    divInfo.appendChild(elementoPreco);

    return divInfo;
}

function excluirPedido() {
    divCarrinhoConteudo.innerHTML = "";
    divCarrinhoConteudo.appendChild(textoCarrinhoVazio);
}