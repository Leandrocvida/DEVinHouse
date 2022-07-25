let contasClientes = [
    {
      id: 1,
      nome: 'Cliente 01',
      saldo: 500,
      senha:"1234"
    },
    {
      id: 2,
      nome: 'Cliente 02',
      saldo: 3000,
      senha:"ABCD"
    },
    {
      id: 3,
      nome: 'Cliente 03',
      saldo: 5000,
      senha:"03AA"
    },
  ];
  
var selectContas = document.getElementById("selectContas");

 var inserirOpcSelect = contasClientes.forEach( (cliente) => {
    let clienteInserir = `<option id="idDoCliente${cliente.id}" value="${cliente.nome}">${cliente.nome}</option>`;
    selectContas.insertAdjacentHTML('afterbegin',clienteInserir);
    });

    // exercicio 4
    
    
function sacarDinheiro(dinheiroASacar,valorEmConta,dadosDoCliente) {
   
    if (dinheiroASacar <= 0 || isNaN(dinheiroASacar)) {
        alert("Valor Inválido");
        
    } else if ( dinheiroASacar > valorEmConta ){
        alert(`Saldo insuficiente! Você possui ${valorEmConta} reais em sua conta`);
        
    } else if ( dinheiroASacar <= valorEmConta ){
        valorEmConta = valorEmConta - dinheiroASacar;
        dadosDoCliente.saldo = valorEmConta;
        alert(`Saque bem sucedido! Você ainda possui ${valorEmConta} reais em sua conta.`);    
        return;
    } 
};

function depositarDinheiro(dinheiroADepositar,valorEmConta,dadosDoCliente) {
   
    
    if (dinheiroADepositar <= 0 || isNaN(dinheiroADepositar)) {
        alert("Valor Inválido");
        
    } else if ( dinheiroADepositar <= valorEmConta ){
        valorEmConta = valorEmConta + dinheiroADepositar;
        dadosDoCliente.saldo = valorEmConta;
        alert(`Deposito Realizado! Agora você possui ${valorEmConta} reais em sua conta.`);    
        return;
    } 
};


var operacao = document.getElementById("operacao");

function aoclique(event) {
    event.preventDefault()
    let qualCliente = selectContas.options[selectContas.selectedIndex].value;  // puxa qual dos clientes a partir do select
    let indiceDadosDoCliente = contasClientes.findIndex(elemento => elemento.nome === qualCliente); //acha o indice
    let dadosDoCliente;
    if (indiceDadosDoCliente!== -1) {
        dadosDoCliente = contasClientes[indiceDadosDoCliente];
    } //cria uma variavel com referencia ao objeto original pra puxar o "cliente" direto array permitindo modificação do array orginal
    let senhaInserida = document.getElementById('senha').value;
    let senhaCadastrada = dadosDoCliente.senha;
    if (senhaCadastrada != senhaInserida){
        alert("Senha Incorreta")
        return
    } 
    let valorEmConta = dadosDoCliente.saldo;
    let qualOperacao = operacao.options[operacao.selectedIndex].value;
    let valorInserido = parseInt(document.getElementById("valor").value); //puxa o valor digitado no imput do HTML
    if (qualOperacao === "sacar") {
        sacarDinheiro(valorInserido,valorEmConta,dadosDoCliente)
    } else if (qualOperacao === "depositar")  {
        depositarDinheiro(valorInserido,valorEmConta,dadosDoCliente)
    }  
};
