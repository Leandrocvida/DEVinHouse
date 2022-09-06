import { useState } from "react";
import { AppContext } from "./AppContext";
import {dicasPadrao} from "@services" 

export const AppProvider = ({ children }) => {
  const dados = "conectado!";
  const [allTips, setAlltips]  = useState(dicasPadrao);
  const [ filtro, setFiltro ] = useState(null);
  const createTip = (dica) => {
    dica.id = Math.random().toString();
    setAlltips([...allTips, dica]);
  };

  const filterTips = (query) => {
    query ? setFiltro(query) : setFiltro(null);
  };

  const tips = filtro? allTips.filter((tip) => tip.titulo.includes(filtro)) : allTips;
  
  const sortByCategory = () => {
    const categories = Array.from(new Set(allTips.map((tip) => tip.categoria)));
    return categories.map((catName) => {
      const count = allTips.filter((tip) => tip.categoria == catName).length;
      return { title: catName, count: count };
    });
  };
  
  const categories = sortByCategory();
  return <AppContext.Provider value={{createTip,filterTips, tips, categories}}>{children}</AppContext.Provider>;
};
