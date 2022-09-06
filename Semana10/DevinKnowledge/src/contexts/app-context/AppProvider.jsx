import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const dados = "conectado!";

  return <AppContext.Provider value={dados}>{children}</AppContext.Provider>;
};
