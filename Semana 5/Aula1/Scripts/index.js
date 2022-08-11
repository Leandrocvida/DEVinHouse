import { renderizaTitulo } from "./alunosView.js";

// MANIPULAÇÃO DO BANCO
alunos.push("Carla");
alunos.push("Caio");

// CAPTURA DE ELEMENTOS
const tituloEl = document.getElementById("titulo_pagina");

//CHAMADAS DE FUNÇÕES
renderizaTitulo(alunos[1], tituloEl);