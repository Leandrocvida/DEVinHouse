import { useContext } from "react";
import { themeContext } from ".";


export const useThemeContext = () => {
  const context = useContext(themeContext);
  return context;
};
