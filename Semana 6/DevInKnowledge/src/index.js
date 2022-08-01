const inputTitulo = document.getElementById("tituloInput");
const inputLinguagem = document.getElementById("linguagemInput");
const inputCategoria = document.getElementById("categoriaInput");
const inputDescricao = document.getElementById("descricaoInput")
const inputVidYoutube = document.getElementById("vidYoutubeInput");
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
verificaLSporArray();
// window.addEventListener("load", verificaLSporArray)
// console.log(todasAsDicas)
document.getElementById("salvarInput").onclick = construirDica;
document.getElementById("limparInput").onclick = limparForm;

