const pessoa1 = {
    nome:"José",
    sobreNome:"Das Coves",
    idade: 21,
    setor: "Camarote",
};

const pessoa2 = {
    nome:"Maria",
    sobreNome:"Silva",
    idade: 17,
    setor: "Camarote",
};

const pessoa3 = {
    nome:"Marcelo",
    sobreNome:"Macedo",
    idade: 30,
    setor: "Pista",
};

const pessoa4 = {
    nome:"Julia",
    sobreNome:"Cravo",
    idade: 25,
    setor: "Pista",
};

const pessoa5 = {
    nome:"Marilia",
    sobreNome:"Mendonça",
    idade: 41,
    setor: "Arquibancada",
};

const pessoa6 = {
    nome:"Dejair",
    sobreNome:"Das Neves",
    idade: 26,
    setor: "Arquibancada",
};

const pessoa7 = {
    nome:"Amanda",
    sobreNome:"Oliveira",
    idade: 16,
    setor: "Arquibancada",
};

let listaDeConvidados = [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5,pessoa6,pessoa7]

function modificarUmArrayDeObjetos(listaDeConvidados) {
    var convidadosComBebidaProcessada = [];
    console.log("teste");
    listaDeConvidados.forEach((pessoa,i) => {
        pessoa = listaDeConvidados[i];
        verificarMaioridade(pessoa);
       convidadosComBebidaProcessada.push(pessoa);
       
      });
    return convidadosComBebidaProcessada;

}

{
console.log("rtas");


}


function verificarMaioridade(pessoa) {
    if (pessoa.idade>17) {
       return pessoa.openbar = true;
    } else {
       return pessoa.openbar = false;
    }    
}

convidadosComBebidaProcessada = modificarUmArrayDeObjetos(listaDeConvidados);
console.log(convidadosComBebidaProcessada)
