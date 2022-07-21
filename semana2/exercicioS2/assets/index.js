function submitFormContact(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById('email').value;
    var descricao = document.getElementById('descricao').value;
    console.log("Nome: " + nome + " - Email: " + email + " - Descrição: " + descricao);
    
    alert("Formulário enviado")
}

