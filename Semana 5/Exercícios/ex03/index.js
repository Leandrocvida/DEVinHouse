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
const pedidoTeste = new Pedido("1234", "Leandro");

console.log(pedidoTeste)