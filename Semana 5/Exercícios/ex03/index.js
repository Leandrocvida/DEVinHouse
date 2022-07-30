class Produto {
    constructor(nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

class Pedido {
    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido
        this.dataPedido = new Date( ).toLocaleDateString( );
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;

    }
    adicionarProduto(produto) {
        const ehProduto = produto instanceof Produto;
        if (ehProduto) {
            this.listaProdutos.push(produto)
        }
    }
    calcularTotal(){
        let valorTotal = 0;
            this.listaProdutos.forEach((produto)=>{
           valorTotal = valorTotal + produto.quantidade * produto.preco;            
        })
        return valorTotal
    }
}

const banana = new Produto("Banana", 3, true, 21);
const pera = new Produto("Pera", 7, true, 62);
const uva = new Produto("Uva", 9, true, 31);
const maca = new Produto("Maçã", 5, true, 42);
const abacaxi = new Produto("Abacaxi", 6, true, 55);

const pedidoLeandro = new Pedido("2022001", "Leandro");
const pedidoSolange = new Pedido("2022002", "Solange");

// Pede pra executar
pedidoLeandro.adicionarProduto(banana);
pedidoLeandro.adicionarProduto(maca);
pedidoLeandro.adicionarProduto(abacaxi);

pedidoSolange.adicionarProduto(banana);
pedidoSolange.adicionarProduto(uva);
pedidoSolange.adicionarProduto(pera);

const pedidos = [ pedidoLeandro, pedidoSolange];
console.log(pedidos)
// Coisas do HTML



function formataParaReal(num) {
    return num.toLocaleString("pt-Br",{
        style: "currency",
        currency: "BRL"
    });
}

function criaLiParaProduto(produto){
    const iLProdutoEl = document.createElement("li");
    iLProdutoEl.innerText = `${produto.nome} - ${produto.quantidade} Kg disponíveis - ${ formataParaReal(produto.preco)}`
return iLProdutoEl
}

function mostraProdutos(lista) {
    const labelEl = document.createElement("label")
    labelEl.htmlFor = "produtos";
    labelEl.innerText = "produtos";

    const uLlistaEl = document.createElement("uL");
    uLlistaEl.name = "produtos"

    lista.forEach((item) => {
        uLlistaEl.appendChild(criaLiParaProduto(item))
    })
    return [labelEl, uLlistaEl]
}

function criaLiPedido(pedido) {
    const liPedido = document.createElement("li");
    liPedido.innerHTML = /*html*/ `
        <p>PEDIDO No. ${pedido.numeroPedido}</p>
        <p>Pedido Realizado em: ${pedido.dataPedido}</p>
        <p>Cliente: ${pedido.nomeCliente}</p>
        <p>Total do Pedido: ${formataParaReal(pedido.calcularTotal())}</p>
        <p>Pagamento: ${pedido.estaPago ? "Pedido Pago" : "Pedido A Pagar" }</p>
    `
    const resultado = mostraProdutos(pedido.listaProdutos)
    const label = resultado[0];
    const lista = resultado[1];


    liPedido.appendChild(label);
    liPedido.appendChild(lista);
    return liPedido
}
const pedidosEL = document.getElementById("ulPedidos");
pedidos.forEach((pedido) => {
    pedidosEL.appendChild(criaLiPedido(pedido))
});
