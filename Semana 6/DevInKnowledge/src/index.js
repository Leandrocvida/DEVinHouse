const inputTitulo = document.getElementById("tituloInput");
const inputLinguagem = document.getElementById("linguagemInput");
const inputCategoria = document.getElementById("categoriaInput");
const inputDescricao = document.getElementById("descricaoInput")
const inputVidYoutube = document.getElementById("vidYoutubeInput");
const uLDosCards = document.getElementById("uLDosCards");
let todasAsDicas = [];
let todasAsDicasDefault = [
    {
    id: 1,
    titulo: `titulo da dica 01`,
    linguagem: "umaskillqualquer",
    categoria: "frontEnd",
    descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut rem, iusto odio soluta fugit reprehenderit voluptas expedita, delectus, sed itaque blanditiis! Debitis perspiciatis, ut voluptate saepe est reprehenderit non inventore.",
    video: "https://www.youtube.com/" 
    },
    {
    id: 2,
    titulo: `titulo da dica 02`,
    linguagem: "umaskillqualquer",
    categoria: "frontEnd",
    descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut rem, iusto odio soluta fugit reprehenderit voluptas expedita, delectus, sed itaque blanditiis! Debitis perspiciatis, ut voluptate saepe est reprehenderit non inventore.",
    video: "https://www.youtube.com/" 
    },
    {
    id: 3,
    titulo: `titulo da dica 03`,
    linguagem: "umaskillqualquer",
    categoria: "frontEnd",
    descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut rem, iusto odio soluta fugit reprehenderit voluptas expedita, delectus, sed itaque blanditiis! Debitis perspiciatis, ut voluptate saepe est reprehenderit non inventore.",
    video: "https://www.youtube.com/" 
    },
    {
    id: 4,
    titulo: `titulo da dica 04`,
    linguagem: "umaskillqualquer",
    categoria: "frontEnd",
    descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut rem, iusto odio soluta fugit reprehenderit voluptas expedita, delectus, sed itaque blanditiis! Debitis perspiciatis, ut voluptate saepe est reprehenderit non inventore.",
    video: "https://www.youtube.com/" 
    },

]

class Dica {
    id = todasAsDicas.length + 1;
    constructor(titulo, linguagem, categoria, descricao, video) {
        this.titulo = (titulo).value;
        this.linguagem = (linguagem).value;
        this.categoria = (categoria).value;
        this.descricao = (descricao).value;
        this.video = (video).value;
        
}

}
function criaDica() {
    let dica = new Dica(inputTitulo, inputLinguagem, inputCategoria, inputDescricao, inputVidYoutube);
return dica
}

function construirDica(event) {
event.preventDefault();
verificaLSporArray();
todasAsDicas.push(criaDica());
localStorage.setItem("todasAsDicas", JSON.stringify(todasAsDicas))
popularCards (todasAsDicas)
}

function verificaLSporArray() {
    if (localStorage.hasOwnProperty("todasAsDicas")) {
        return todasAsDicas = JSON.parse(localStorage.getItem("todasAsDicas"))
      }
      else {
        todasAsDicas = todasAsDicasDefault
        return localStorage.setItem("todasAsDicas", JSON.stringify(todasAsDicas))
      }       
}

function limparForm() {
    document.getElementById("formulario").reset()
}

function teste() {
    alert("teste");
    // function construirDica(event);
    // console.log(todasAsDicas)

} 

function popularCards (lista){
    verificaLSporArray();
    uLDosCards.replaceChildren();
    lista.forEach(element => {
        uLDosCards.appendChild(criaCard(element))
    });
}

function criaCard(dica) {
    const liCard = document.createElement("li");
    liCard.setAttribute("class", "card");
    const idCompleto = `cardId${dica.id}`
    liCard.setAttribute("id", idCompleto);
    liCard.setAttribute("title", dica.titulo);
    liCard.innerHTML = `<h2 id=>${dica.titulo}</h2>
    <h3>Linguagem: ${dica.linguagem}</h3>
    <h3>Categoria: ${dica.categoria}</h3>
    <p>${dica.descricao}</p>
    <a href = "${dica.video}" class = "botaoVideo"><button>video</button></a>
    <button id = "botaoLimparCard${dica.id}">Limpar</button>
    <button id ="botaoEditarCard${dica.id}">Editar</button>`
    return liCard
}

function pesquisaPorTitulo(event) {
    event.preventDefault();
    let inputPesquisa = document.getElementById("searchBarQuerry").value
    let objMinusc = inputPesquisa.toLowerCase()
    let arrayFiltrado = todasAsDicas.filter(function (dica) { return dica.titulo.toLowerCase().includes(objMinusc) })
    popularCards(arrayFiltrado);
}
function filtrarPorCategoria(categ) {
    verificaLSporArray();
    let arrayFiltrado = todasAsDicas.filter(function (dica) { return dica.categoria == categ })
    
    return arrayFiltrado
}
let arrayFrontEnd = filtrarPorCategoria("frontEnd");
let arrayBackEnd = filtrarPorCategoria("backEnd");
let arrayFullStack= filtrarPorCategoria("fullStack");
let arraySoftSkill= filtrarPorCategoria("softSkill");

function contadorDisplay() {
   let totalDisplay = document.getElementById("totalDisplay");
   let frontEndDisplay = document.getElementById("frontEndDisplay");
   let backEndDisplay = document.getElementById("backEndDisplay");
   let fullStackDisplay = document.getElementById("FullStackDisplay");
   let softSkillDisplay = document.getElementById("SoftSkillDisplay");
   totalDisplay.innerText = todasAsDicas.length;
   frontEndDisplay.innerText = arrayFrontEnd.length;
   backEndDisplay.innerText = arrayBackEnd.length;
   fullStackDisplay.innerText = arrayFullStack.length;
   softSkillDisplay.innerText = arraySoftSkill.length;

}

function limpaUl(event) {
    event.preventDefault();
    uLDosCards.replaceChildren()
}
function popularDataList() {
    let datalist = document.getElementById("listaDeTitulos")
    todasAsDicas.forEach(element => {
       let option = document.createElement("option")
       option.setAttribute("value",`${element.titulo}`)
        datalist.appendChild(option)
    });
}
verificaLSporArray();
popularCards (todasAsDicas);
popularDataList()
contadorDisplay()
// window.addEventListener("load", verificaLSporArray)
// console.log(todasAsDicas)
document.getElementById("botaoPesquisar").onclick = pesquisaPorTitulo;
document.getElementById("salvarInput").onclick = construirDica;
document.getElementById("limparInput").onclick = limparForm;
document.getElementById("searchBarLimpar").onclick = limpaUl;
