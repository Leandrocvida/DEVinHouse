import { Summary, Filter, CardList, TipCard} from "@components";
import { useAppContext } from "@contexts";
const todasAsDicasDefault = [
  {
  id: "1",
  titulo: `Apresentação`,
  linguagem: "JavaScript",
  categoria: "fullStack",
  descricao: "Estes Cards de Dicas padrão estão programados para aparecer no primeiro acesso. São carregados no local storage, no primeiro acesso e podem ser removidos e editados normalmente.",
  video: "https://youtu.be/dQw4w9WgXcQ" 
  },
  {
  id: "2",
  titulo: `Coisas Extras`,
  linguagem: "JavaScript e HTML",
  categoria: "backEnd",
  descricao: "Dentro da barra  de pesquise criei uma função que cria um lista de Auto-completar. Conforme você for digitando vão sendo filtradas apenas os titulos que contém os caracteres.",
  video: "https://youtu.be/ocwnns57cYQ" 
  },
  {
  id: "deb839fdf-68f1-4b23-bec2-16e0af1d478",
  titulo: `Considere Isso`,
  linguagem: "Meditação",
  categoria: "softSkill",
  descricao: "Todo o projeto que parece enorme inicialmente tem que ser executado aos poucos. Dividir as tarefas em subcategorias faz os problemas parecerem mais fáceis. Se bem que esse video demonstra a Sensação de corrigir alguns projetos...",
  video: "https://youtu.be/baY3SaIhfl0" 
  },
  {
      id: "4",
      titulo: `Mais um Extra`,
      linguagem: "Javascript",
      categoria: "backEnd",
      descricao: "Também foi adicionada um função que, quando uma das categorias é clicada, o campo de exibição apresenta apenas esta categria. Para reverter pode se clicar em total ou limpar do campo de pesquisa",
      video: "https://www.youtube.com/watch?v=wU4x14zwdxI" 
      },
  {
  id: "5",
  titulo: `Sem Video`,
  linguagem: "Javascript",
  categoria: "frontEnd",
  descricao: "Esse card não possui video, como pode ser verificado o botão não é adicionado automaticamente.",
  video: "" 
  },

];
const umaDica = {
  id: "1",
  titulo: `Apresentação`,
  linguagem: "JavaScript",
  categoria: "fullStack",
  descricao: "Estes Cards de Dicas padrão estão programados para aparecer no primeiro acesso. São carregados no local storage, no primeiro acesso e podem ser removidos e editados normalmente.",
  video: "https://youtu.be/dQw4w9WgXcQ" 
  };
export const MainContent = () => {
  let result = useAppContext();
  console.log(result)

  return (
    <div className="lateralToda">
      <header className="headerLateral">
        <Summary/>
        <Filter />
        
      </header>
      <main>
        <CardList>
          <TipCard dica = {umaDica}/>
        </CardList>
      </main>
    </div>
  );
};
