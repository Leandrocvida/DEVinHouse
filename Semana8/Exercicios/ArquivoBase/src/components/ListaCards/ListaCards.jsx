import PropTypes from "prop-types";

import { Card } from "@components";

import styles from "./ListaCards.module.css";
import { useState } from "react";

export const ListaCards = ({ produtos }) => {
  const [listaIdSelecionados, setlistaIdSelecionados] = useState([]);
  // const filter =(id)=> { return (listaIdSelecionados.includes(id))}
  const handleSelecionar = (idFornecido) => {
    listaIdSelecionados.includes(idFornecido)
      ? setlistaIdSelecionados(listaIdSelecionados.filter((id) => id !== idFornecido))
      : setlistaIdSelecionados((plistaIdSelecionados) => [
          ...plistaIdSelecionados,
          idFornecido,
        ]);
  };
  // console.log(filter(1))
  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Card
            produto={produto}
            onSelecionar={() => handleSelecionar(produto.id)}
            selecionado={listaIdSelecionados.includes(produto.id)}
          />
        </li>
      ))}
    </ul>
  );
};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
