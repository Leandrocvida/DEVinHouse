function soma() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
  
var operacao = parseInt(num1) + parseInt(num2);

    var resultado = document.createElement('p');
    resultado.innerText = operacao;
  
    document.body.appendChild(resultado);
  }

  function dividir() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
  
var operacao = parseInt(num1) / parseInt(num2);

    var resultado = document.createElement('p');
    resultado.innerText = operacao;
  
    document.body.appendChild(resultado);
  }

  function subtrair() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
  
var operacao = parseInt(num1) - parseInt(num2);

    var resultado = document.createElement('p');
    resultado.innerText = operacao;
  
    document.body.appendChild(resultado);
  }

  function multiplicar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
  
var operacao = parseInt(num1) * parseInt(num2);

    var resultado = document.createElement('p');
    resultado.innerText = operacao;
  
    document.body.appendChild(resultado);
  }