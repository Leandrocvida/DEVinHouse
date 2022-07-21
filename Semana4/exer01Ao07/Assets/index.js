const contasClientes = [
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
  
//   Crie uma função para adicionar as opções do select de contas com os itens do array. 
// function criaOption(nome) {
//     let option = document.createElement('option');
//     option.textContent = nome;
//     return option;
// }
var selectContas = document.getElementById("selectContas");

 var inserirOpcSelect = contasClientes.forEach( (cliente) => {
    let clienteInserir = `<option id="idDoCliente${cliente.id}" value="${cliente.nome}">${cliente.nome}</option>`;
    selectContas.insertAdjacentHTML('afterbegin',clienteInserir);
    });




  
//   - No evento de onload do body chame essa função para popular o select de contas.