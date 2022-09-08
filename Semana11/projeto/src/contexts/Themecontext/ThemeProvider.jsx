import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

import { dark, light } from "../../themes";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(dark);
  const local= localStorage.getItem("tema");
   
  const checkLocal=()=>{
    if (local) {
    return setTheme(local)
    }
  } 
  useEffect(checkLocal);

  const changeTheme = () => {
    if (theme === light) {
      setTheme(dark)
      return localStorage.setItem("tema","dark");
    }
    if (theme === dark) {
      setTheme(light)
      return localStorage.setItem("tema","light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
