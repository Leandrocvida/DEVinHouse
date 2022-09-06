import { Summary, Filter, CardList, TipCard} from "@components";
import { useAppContext } from "@contexts";

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
