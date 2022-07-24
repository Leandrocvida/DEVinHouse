function verificarIdade() {
    let input = parseInt(document.getElementById("inpute").value)
      
    if (isNaN(input) || input < 0) { 
        
        return alert("Digite um número");
        
    }
    
    else if (input < 15) {
       return alert("jovem");
    } 

    else if (input >= 65)
       return alert("idoso");
    
    else {
        return alert("adulto");
    }
    
}
