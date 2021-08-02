import React, { createContext } from "react";
import useInitialLocalStorage from "../customHooks/useInitialLocalStorage";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useInitialLocalStorage("theme", false);
  const toggleTheme = () => setIsDark((prevState) => !prevState);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
