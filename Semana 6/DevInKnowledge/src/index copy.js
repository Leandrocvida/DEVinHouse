const inputHiddenID = document.getElementById("identificadorOculto");
const inputTitulo = document.getElementById("tituloInput");
const inputLinguagem = document.getElementById("linguagemInput");
const inputCategoria = document.getElementById("categoriaInput");
const inputDescricao = document.getElementById("descricaoInput")
const inputVidYoutube = document.getElementById("vidYoutubeInput");
const uLDosCards = document.getElementById("uLDosCards");
let inputPesquisa = document.getElementById("searchBarQuerry").value;
let todasAsDicas = [];
let todasAsDicasDefault = [
    {
    id: "1",
    titulo: `Apresentação`,
    linguagem: "JavaScript",
    categoria: "fullStack",
    descricao: "Estes Cards de Dicas padrão estão programados para aparecer no primeiro acesso. São carregados no local storage, no primeiro acesso e podem ser removidos e editados normalmente.",
    video: "https://youtu.be/dQw4w9WgXcQ" 
    },
    {
    id: "2",
    titulo: `Coisas Extras`,
    linguagem: "JavaScript e HTML",
    categoria: "backEnd",
    descricao: "Dentro da barra  de pesquise criei uma função que cria um lista de Auto-completar. Conforme você for digitando vão sendo filtradas apenas os titulos que contém os caracteres.",
    video: "https://youtu.be/ocwnns57cYQ" 
    },
    {
    id: "deb839fdf-68f1-4b23-bec2-16e0af1d478",
    titulo: `Considere Isso`,
    linguagem: "Meditação",
    categoria: "softSkill",
    descricao: "Todo o projeto que parece enorme inicialmente tem que ser executado aos poucos. Dividir as tarefas em subcategorias faz os problemas parecerem mais fáceis. Se bem que esse video demonstra a Sensação de corrigir alguns projetos...",
    video: "https://youtu.be/baY3SaIhfl0" 
    },
    {
    id: "4",
    titulo: `Sem Video`,
    linguagem: "Javascript",
    categoria: "frontEnd",
    descricao: "Esse card não possui video, como pode ser verificado o botão não é adicionado automaticamente.",
    video: "" 
    },

]

class Dica {
    id = uuidv4();
    constructor(titulo, linguagem, categoria, descricao, video) {
        this.titulo = (titulo).value;
        this.linguagem = (linguagem).value;
        this.categoria = (categoria).value;
        this.descricao = (descricao).value;
        this.video = (video).value;
        
}

}

const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  };

  function criaDica() {
    let dica = new Dica(inputTitulo, inputLinguagem, inputCategoria, inputDescricao, inputVidYoutube);
return dica
}

function construirDica() {

todasAsDicas.push(criaDica());
localStorage.setItem("todasAsDicas", JSON.stringify(todasAsDicas));
popularCards (todasAsDicas);
contadorDisplay();
limparForm();
}

function verificaLSporArray() {
    if (localStorage.hasOwnProperty("todasAsDicas")) {
        return todasAsDicas = JSON.parse(localStorage.getItem("todasAsDicas"));
    }
    else {
        todasAsDicas = todasAsDicasDefault
        return localStorage.setItem("todasAsDicas", JSON.stringify(todasAsDicas));
    }       
}

function limparForm() {
    inputHiddenID.value = null;
    document.getElementById("formulario").reset();
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
    const idCompleto = `cardId${dica.id}`;
    liCard.setAttribute("id", idCompleto);
    liCard.setAttribute("title", dica.titulo);
    let cardH2 = document.createElement("h2");
    cardH2.setAttribute("class", "card-h2");
    let idTitulo = `idTitulo${dica.titulo}`;
    cardH2.setAttribute("id", idTitulo);
    cardH2.innerHTML = dica.titulo;
    liCard.appendChild(cardH2);
    let cardH3 = document.createElement("h3");
    cardH3.innerHTML = `Linguagem: ${dica.linguagem}`;
    liCard.appendChild(cardH3);
    let cardH3C = document.createElement("h3");
    cardH3C.innerHTML = `Categoria: ${dica.categoria}`;
    liCard.appendChild(cardH3C);
    let pdescricao = document.createElement("p");
    pdescricao.innerHTML = `${dica.descricao}`;
    liCard.appendChild(pdescricao);
    if (dica.video) {
        let aVideo = document.createElement("a")
        aVideo.setAttribute("href", dica.video);
        aVideo.setAttribute("target", "_blank");
        aVideo.setAttribute("data-src", dica.video);
        aVideo.setAttribute("class", "botaoVideo");
        aVideo.innerHTML= "<i class='fa-solid fa-video'></i>"; //parainserir o icone aqui
       liCard.appendChild(aVideo);
    } 
    let botaoEditarCard = document.createElement("button");
    let editarHandler = `editarDica('${dica.id}')`
    botaoEditarCard.setAttribute("class", "botaoEditarCard");
    botaoEditarCard.setAttribute("onclick", editarHandler);
    botaoEditarCard.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>"
    liCard.appendChild(botaoEditarCard);
    let botaoApagarCard = document.createElement("button");
    let apagarHandler = `removerDica('${dica.id}')`
    botaoApagarCard.setAttribute("onclick", apagarHandler);
    botaoApagarCard.setAttribute("class", "botaoApagarCard");
    botaoApagarCard.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
    liCard.appendChild(botaoApagarCard);
    return liCard
 
}

function editarDica(idDicaAEditar) {
    verificaLSporArray();
    const indexDicaAEditar = todasAsDicas.findIndex(dica => dica.id === idDicaAEditar) 
     let dicaAEditar = todasAsDicas[indexDicaAEditar];
    populaInputs(dicaAEditar);
}

function populaInputs (dicaParaEditar) {
    inputHiddenID.value = dicaParaEditar.id;
    inputTitulo.value = dicaParaEditar.titulo;
    inputLinguagem.value = dicaParaEditar.linguagem;
    inputCategoria.value = dicaParaEditar.categoria;
    inputDescricao.value = dicaParaEditar.descricao;
    inputVidYoutube.value = dicaParaEditar.video;
};

function editarOuCriar(event) {
        event.preventDefault();
        verificaLSporArray();
       if (inputHiddenID.value.length === 0) {
        construirDica();
        alert("Nova Dica Adicionada")
    } else {
        const indexDicaAEditar = todasAsDicas.findIndex(dica => dica.id === inputHiddenID.value) 
        todasAsDicas.splice(indexDicaAEditar, 1)
        construirDica()
        alert(`Dica Editada com Sucesso!`)
    }
    
}

function removerDica(idDaDicaARemover) { 
    let texto = "Essa ação irá remover a dica!"; 
    if (confirm(texto) == true) {
        verificaLSporArray();
        todasAsDicas = todasAsDicas.filter(dica => dica.id !== idDaDicaARemover)
        localStorage.setItem("todasAsDicas", JSON.stringify(todasAsDicas))
        popularCards (todasAsDicas);
        contadorDisplay()
        alert("Dica Removida!")
    } else {
        alert("Dica Mantida!")
    }
}
function pesquisaPorTitulo(event) {
    event.preventDefault();
    let inputPesquisaInt = document.getElementById("searchBarQuerry").value;
    const objMinusc = inputPesquisaInt.toLowerCase()
    let arrayFiltrado = todasAsDicas.filter(function (dica) { return dica.titulo.toLowerCase().includes(objMinusc) })
    popularCards(arrayFiltrado);
}

function filtrarPorCategoria(categ) {
    verificaLSporArray();
    let arrayFiltrado = todasAsDicas.filter(function (dica) { return dica.categoria == categ })
    
    return arrayFiltrado
}

function contadorDisplay() {
    let arrayFrontEnd = filtrarPorCategoria("frontEnd");
    let arrayBackEnd = filtrarPorCategoria("backEnd");
    let arrayFullStack= filtrarPorCategoria("fullStack");
    let arraySoftSkill= filtrarPorCategoria("softSkill");
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
function limparCampoPesquisa() {
    inputPesquisa = "";
}

verificaLSporArray();
popularCards (todasAsDicas);
popularDataList()
contadorDisplay()

document.getElementById("botaoPesquisar").onclick = pesquisaPorTitulo;
document.getElementById("limparInput").onclick = limparForm;
document.getElementById("searchBarLimpar").onclick = limparCampoPesquisa();
document.getElementById("formulario").onsubmit = editarOuCriar;