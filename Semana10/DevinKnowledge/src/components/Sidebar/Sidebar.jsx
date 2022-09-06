import { useForm } from "react-hook-form";

export const Sidebar = () => {
  const { register, handleSubmit } = useForm();
  const handleCreateTip = (dados) => console.log(dados);
  return (
    <aside>
      <header className="headerAside">
        <h1>DEVinKnowledge</h1>
        <div>
          <h3>Learn, Code and Save</h3>
        </div>
      </header>
      <form className="formContainer"  onSubmit={handleSubmit(handleCreateTip)}>
        <input type="hidden" id="identificadorOculto" />
        <div>
          <label>Título</label>
          <br />
          <input
            {...register("titulo")}
            type="text"
            minLength="8"
            maxLength="64"
            placeholder="Digite seu Título"
          />
        </div>
        <div>
          <label>Linguagem/skill</label>
          <br />
          <input
            {...register("linguagem")}
            type="text"
            minLength="4"
            maxLength="16"
            placeholder="Digite uma Linguagem ou skill"
          />
        </div>
        <div>
          <label>Categoria</label>
          <br />
          <select {...register("categoria")}>
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
            {...register("descricao")}
            minLength="32"
            maxLength="512"
            className="textarea-form"
            placeholder="Descreva Sua Dica"
            rows="5"
          ></textarea>
        </div>
        <div>
          <label>Vídeo Youtube</label>
          <br />
          <input
            {...register("video")}
            type="url"
            placeholder="Digite o endereço de um Video"
            name="vidYoutubeInput"
            id="vidYoutubeInput"
          />
        </div>
        <div className="buttonContainer">
          <button className="formBotaoLimpar">Limpar</button>
          <button className="formBotaoSalvar" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </aside>
  );
};
