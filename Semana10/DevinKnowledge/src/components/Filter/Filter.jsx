import { useAppContext } from "@contexts";

export const Filter = () =>{
    const{ filterTips} = useAppContext();

  return(
    <form className="searchBarContainer">
    <input
      className="searchBarQuerry"
      type="text"
      placeholder="Digite um Título para Pesquisar"
      onChange={(e) => filterTips(e.target.value)}
      
    />
    <button className="searchBarLimpar" id="searchBarLimpar">
      <i className="fa-solid fa-x"></i>
    </button>
    <button className="botaoPesquisar" id="botaoPesquisar">
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
    <datalist id="listaDeTitulos"></datalist>
  </form>
  )
}