var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];
  
   
  var inserirNome = listaConvidados.map(function (item) {
    var nomeCompleto = item.nome + " " + item.sobrenome;
    var lista = "<li>" + nomeCompleto + "</li>";
    return document.getElementbyId("ulDosNomes").innerText+=lista;
  });
  
 
  window.onload = inserirNome;


