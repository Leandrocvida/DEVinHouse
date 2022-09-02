export const MainContent = () => {
  return (
    <div class="lateralToda">
      <header class="headerLateral">
        <div class="displayContainer">
          <button id="botaoTotal" class="display">
            <h2>Total</h2>
            <p id="totalDisplay"></p>
          </button>

          <button id="botaoFrontEnd" class="display">
            <h2>FrontEnd</h2>
            <p id="frontEndDisplay"></p>
          </button>
          <button id="botaoBackEnd" class="display">
            <h2>BackEnd</h2>
            <p id="backEndDisplay"></p>
          </button>
          <button id="botaoFullStack" class="display">
            <h2>FullStack</h2>
            <p id="FullStackDisplay"></p>
          </button>
          <button id="botaoSoftSkill" class="display">
            <h2>SoftSkill</h2>
            <p id="SoftSkillDisplay"></p>
          </button>
        </div>
        <form class="searchBarContainer">
          <input
            class="searchBarQuerry"
            type="search"
            placeholder="Digite um Título para Pesquisar"
            id="searchBarQuerry"
            list="listaDeTitulos"
          />
          <button class="searchBarLimpar" id="searchBarLimpar">
            <i class="fa-solid fa-x"></i>
          </button>
          <button class="botaoPesquisar" id="botaoPesquisar">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <datalist id="listaDeTitulos"></datalist>
        </form>
      </header>
      <main>
        <ul class="cardContainer" id="uLDosCards"></ul>
      </main>
    </div>
  );
};
