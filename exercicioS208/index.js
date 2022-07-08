var anoInserido = prompt("Insira um Ano");
var anoAtual = new Date().getFullYear();
var diferencaDeAnos =  parseInt(anoAtual) - parseInt(anoInserido);
alert(diferencaDeAnos);