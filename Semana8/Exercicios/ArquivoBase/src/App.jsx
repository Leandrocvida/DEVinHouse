import { Footer, Header, Secao, FiltroSecao } from "@components";
import produtos from "@services/produtos.json";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(
    produtos.principais.map((p) => p.subSecao)
  );

  const arraySecoes = [
    {
      nome: "Entradas",
      produtos: produtos.entradas,
      subSecoes: subSecoesEntradas,
    },
    {
      nome: "Principais",
      produtos: produtos.principais,
      subSecoes: subSecoesPrincipais,
    },
    {
      nome: "Sobremesas",
      produtos: produtos.sobremesas,
    },
  ];
  const [secaoSelec, setSecaoSelec] = useState(null);

  const handleSelecionarSecao = (titSecao) => {
    if (titSecao === secaoSelec) {
      setSecaoSelec(null);
    } else {
      setSecaoSelec(titSecao);
    }
  };
  const renderizaSecoes = (arrayRenderizar) => {
    return arrayRenderizar.map((secao) => {
      return (
        <Secao
          key={secao.nome}
          nome={secao.nome}
          produtos={secao.produtos}
          subSecoes={secao.subSecoes ? Array.from(secao.subSecoes) : null}
        />
      );
    });
  };
  const renderSecoes = () => {
    if (secaoSelec === null) {
      return renderizaSecoes(arraySecoes);
    } else {
      let arrayFiltrado = arraySecoes.filter((p) => p.nome === secaoSelec);
      return renderizaSecoes(arrayFiltrado);
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao
        arraySecoes={arraySecoes}
        onSelecionarSecao={handleSelecionarSecao}
      />
      <main className={styles.main}>{renderSecoes()}</main>
      <Footer />
      <datalist></datalist>
    </div>
    
  );
}

export default App;
