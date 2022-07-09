var conta = document.getElementById('contador');
var numero = parseInt(conta.innerText)

function incrementa() {
  
      
var operacao = numero++;
    
    contador.textContent = operacao;
    
  }
 
  function decrementa() {
   
      
var operacao = numero--;
    
    contador.textContent = operacao;
    
  }
