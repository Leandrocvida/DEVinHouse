export const Sidebar = () => {
  return (
    <aside>
      <header class="headerAside">
        <h1>DEVinKnowledge</h1>
        <div>
          <h3>Learn, Code and Save</h3>
        </div>
      </header>
      <form class="formContainer" id="formulario" action="">
        <input type="hidden" id="identificadorOculto" />
        <div>
          <label>Título</label>
          <br />
          <input
            type="text"
            minlength="8"
            maxlength="64"
            name="titulo"
            placeholder="Digite seu Título"
            id="tituloInput"
            required
          />
        </div>
        <div>
          <label>Linguagem/skill</label>
          <br />
          <input
            name="linguagem"
            type="text"
            minlength="4"
            maxlength="16"
            placeholder="Digite uma Linguagem ou skill"
            id="linguagemInput"
            required
          />
        </div>
        <div>
          <label>Categoria</label>
          <br />
          <select name="categoriaInput" id="categoriaInput" required>
            <option value="frontEnd">FrontEnd</option>
            <option value="backEnd">BackEnd</option>
            <option value="fullStack">FullStack</option>
            <option value="softSkill">Comportamental/Soft</option>
          </select>
        </div>
        <div>
          <label class="labelLongo">Descriçãp Completa (Dica)</label>
          <br />
          <textarea
            minlength="32"
            maxlength="512"
            class="textarea-form"
            id="descricaoInput"
            name="descricaoInput"
            placeholder="Descreva Sua Dica"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <label>Vídeo Youtube</label>
          <br />
          <input
            type="url"
            placeholder="Digite o endereço de um Video"
            name="vidYoutubeInput"
            id="vidYoutubeInput"
          />
        </div>
        <div class="buttonContainer">
          <button class="formBotaoLimpar" id="limparInput">
            Limpar
          </button>
          <button class="formBotaoSalvar" type="submit" id="salvarInput">
            Salvar
          </button>
        </div>
      </form>
    </aside>
  );
}
