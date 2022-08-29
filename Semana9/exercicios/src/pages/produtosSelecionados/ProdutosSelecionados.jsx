import { ListaCards } from "@components";
import { useProdSelec } from "@contexts";
import { formataValor } from "@utils";
import styles from "./ProdutosSelecionados.module.css";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados, limpaSelec } = useProdSelec();
  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor;
  }, 0);
  const totalFormatado = formataValor(total);

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <ListaCards produtos={produtosSelecionados} />
      <div className={styles.div}>
        <h2 className={styles.h2}> Valor total:</h2>
        <h2 className={styles.h2}>{totalFormatado}</h2>
        <button onClick={limpaSelec} >Limpar Seleção</button>
      </div>
    </>
  );
};
