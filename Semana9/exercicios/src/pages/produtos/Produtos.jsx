import { useState } from "react";
import { produtos } from "@services";
import { Secao, FiltroSecao } from "@components";
export const Produtos = () => {
  const [filtro, setFiltro] = useState(null);

  const secoes = Array.from(new Set(produtos.map((prod) => prod.secao)));

  const obterProdutosSecao = (secao) => {
    return produtos.filter((p) => p.secao === secao);
  };

  const obterSubSecoes = (secao) => {
    const produtosComSubSecoes = obterProdutosSecao(secao).filter(
      (p) => p.subSecao
    );

    return Array.from(new Set(produtosComSubSecoes.map((p) => p.subSecao)));
  };

  const obterSecoesFiltradas = () => {
    if (filtro) {
      return secoes.filtro((s) => s === filtro);
    }
    return secoes;
  };

  const handleSelecionarSecao = (secao) => {
    if (secao === filtro) {
      setFiltro(null);
      return;
    }
    setFiltro(secao);
  };

  return (
    <>
      <FiltroSecao
        secoes={secoes}
        secaoSelecionada={filtro}
        onSelecionar={handleSelecionarSecao}
      />

      {obterSecoesFiltradas().map((secao) => (
        <Secao
          key={secao}
          nome={secao}
          produtos={obterProdutosSecao(secao)}
          subSecoes={obterSubSecoes(secao)}
        />
      ))}
    </>
  );
};
