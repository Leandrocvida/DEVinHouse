let contasClientes = [
    {
      id: 1,
      nome: 'Cliente 01',
      saldo: 500,
    },
    {
      id: 2,
      nome: 'Cliente 02',
      saldo: 3000,
    },
    {
      id: 3,
      nome: 'Cliente 03',
      saldo: 5000,
    },
  ];
  
var selectContas = document.getElementById("selectContas");

 var inserirOpcSelect = contasClientes.forEach( (cliente) => {
    let clienteInserir = `<option id="idDoCliente${cliente.id}" value="${cliente.nome}">${cliente.nome}</option>`;
    selectContas.insertAdjacentHTML('afterbegin',clienteInserir);
    });

    // exercicio 4
    
    
function sacarDinheiro() {
   
    let qualCliente = selectContas.options[selectContas.selectedIndex].value;  // puxa qual dos clientes a partir do select
    let indiceDadosDoCliente = contasClientes.findIndex(elemento => elemento.nome === qualCliente); //acha o indice
    let dadosDoCliente;
    if (indiceDadosDoCliente!== -1) {
        dadosDoCliente = contasClientes[indiceDadosDoCliente];
    } //cria uma variavel com referencia ao objeto original pra puxar o "cliente" direto array permitindo modificação do array orginal
    var valorEmConta = dadosDoCliente.saldo;
    var dinheiroASacar = parseInt(document.getElementById("valor").value); //puxa o valor digitado no imput do HTML
    if (isNaN(valor) || dinheiroASacar <= 0) {
        alert("Valor Inválido");
        
    } else if ( dinheiroASacar > valorEmConta ){
        alert(`Saldo insuficiente! Você possui ${valorEmConta} reais em sua conta`);
        
    } else if ( dinheiroASacar <= valorEmConta ){
        valorEmConta = valorEmConta - dinheiroASacar;
        
        alert(`Saque bem sucedido! Você ainda possui ${valorEmConta} reais em sua conta.`);    
        cart.push({element: element});
        // contasClientes[indiceDadosDoCliente].push( {saldo: valorEmConta} ) 
        contasClientes[indiceDadosDoCliente].saldo = valorEmConta;
    } 
};
var operacao = document.getElementById("operacao");

function aoclique(event) {
    event.preventDefault();
    let qualOperacao = operacao.options[operacao.selectedIndex].value;
    if (qualOperacao === "sacar") {
        sacarDinheiro()
    } else if (qualOperacao === "depositar")  {
        alert("deposito")
    }  
};
