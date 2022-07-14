const formId = document.querySelector("#formId");

formId.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const lastName = document.querySelector('#lastName').value;
    console.log(name, "Nome digitado");
    console.log(lastName, "Sobrenome digitado");
})

const firstFunction = () => {
    alert ("pagina carregada");
};

window.onload = function () {
    firstFunction()
};

window.addEventListener('keydown', event =>{
    console.log(event.key);
})