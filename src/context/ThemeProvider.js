import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
