import style from "./Main.module.css";
import pratosPrincipais from "../../assets/cardapio/pratosPrincipais.json";
import cardapio from "../../assets/cardapio/cardapio.json";
import { entradas, saladas,  sobremesas, bebidas } from "../../assets/cardapio.jsx";
import { Section } from "../Section/Section.jsx";
const subEntradas = [];
const subSaladas = [];
const subSobremesa = [];
const subPratosPrincipais = ["Carnes Vermelhas","Aves","Peixes","Massas","Risotos"]
const subBebidas = ["Sem Álcool", "Vinhos", "Drinks","Cervejas"]

export const Main = () => {
return (
    <main className={style.main}>
      <Section listaComidas={entradas} nomeDaSecao = "Entradas" listaSubsecao={subEntradas}/>
      <Section listaComidas={saladas} nomeDaSecao = "Saladas" listaSubsecao={subSaladas}/>
      <Section listaComidas={pratosPrincipais} nomeDaSecao = "Pratos Principais" listaSubsecao={subPratosPrincipais}/>
      <Section listaComidas={sobremesas} nomeDaSecao = "Sobremesas" listaSubsecao={subSobremesa}/>
      <Section listaComidas={bebidas} nomeDaSecao = "Bebidas" listaSubsecao={subBebidas}/>

    </main>
)
}
