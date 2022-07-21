// console.log("teste");
// //document.body.style.backgroundColor = "black";
// var h1 = document.getElementById("titulo");
// //h1.style.color = "white";
// h1.innerText = "Olá Dom!";
// console.log(h1)

// var subtitulo = document.createElement('p');
// subtitulo.innerText = "subtítulo"
// //document.body.appendChild(subtitulo)
// document.body.insertBefore(subtitulo, h1)
// var item = document.createElement("li")
// item.innerText = "Caderno";

// var lista = document.appendChild

function mudaCor() {
var titulo = document.getElementById(titulo);
titulo.style.color = red;

}

function addProduto (){
    var descricao = document.getElementById("valor").value;
    var lista = document.getElementById("lista");

    var item = document.createElement("li");
    item.innerText = descricao; 
    console.log(descricao);

    lista.appendChild(item)
}


