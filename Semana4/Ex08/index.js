
let botao = document.getElementById("button");

botao.addEventListener("click", function(){
    verificarPar()
 });

function verificarPar() {
    let input = parseInt(document.getElementById("input").value);
    let comResto = input % 2;
    
    if (isNaN(input)) { 
        
        return alert("Digite um número");
        
    }

    if (comResto == 0){ 
       return alert("Este número é par");
      
    }
    else if (comResto !== 0){
       return alert("Este número é impar");
       
    }

}



// function verificarPar(event){
//     event.preventDefault
//     alert("test")
// }