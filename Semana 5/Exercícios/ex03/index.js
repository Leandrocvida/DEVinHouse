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