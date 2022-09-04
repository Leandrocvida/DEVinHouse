export const Filter = () =>{
    return(
    <form className="searchBarContainer">
    <input
      className="searchBarQuerry"
      type="search"
      placeholder="Digite um Título para Pesquisar"
      id="searchBarQuerry"
      list="listaDeTitulos"
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