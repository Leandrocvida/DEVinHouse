export const Sidebar = () => {
  return (
    <aside>
      <header className="headerAside">
        <h1>DEVinKnowledge</h1>
        <div>
          <h3>Learn, Code and Save</h3>
        </div>
      </header>
      <form className="formContainer" id="formulario" action="">
        <input type="hidden" id="identificadorOculto" />
        <div>
          <label>Título</label>
          <br />
          <input
            type="text"
            minLength="8"
            maxLength="64"
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
            minLength="4"
            maxLength="16"
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
          <label className="labelLongo">Descriçãp Completa (Dica)</label>
          <br />
          <textarea
            minLength="32"
            maxLength="512"
            className="textarea-form"
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
        <div className="buttonContainer">
          <button className="formBotaoLimpar" id="limparInput">
            Limpar
          </button>
          <button className="formBotaoSalvar" type="submit" id="salvarInput">
            Salvar
          </button>
        </div>
      </form>
    </aside>
  );
}
