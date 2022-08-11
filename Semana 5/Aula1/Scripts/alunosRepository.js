import { alunos } from "./database.js";

export const adicionaAluno = (aluno) => {
  alunos.push(aluno);
};

export const buscarAluno = (aluno) => {
  return alunos.find((a) => a === aluno);
};