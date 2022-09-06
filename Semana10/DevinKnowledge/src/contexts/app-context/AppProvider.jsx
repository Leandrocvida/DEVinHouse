import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const dados = "conectado!";
  const { allTips, setAlltips } = useState([]);
  const { filtro, setFilter } = useState(null);
  const createTip = (dica) => {
    setAlltips([...allTips, dica]);
  };

  const filterTips = (query) => {
    query ? setFilter(query) : setFilter(null);
  };

  const tips = filtro? allTips.filter((tip) => tip.titulo.includes(filtro)) : allTips;

  
  return <AppContext.Provider value={{createTip,filterTips, tips}}>{children}</AppContext.Provider>;
};
