import { createContext, useEffect, useState } from "react";
export const themes = {
  dark: "dark",
  light: "",
};

export const themeContext = createContext({
  theme: themes.light,
});
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = (theme) => {
    setTheme(theme);
  };
  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add("dark");
        break;
      case themes.light:
        document.body.classList.remove("dark");
        break;
      default: {
        document.body.classList.remove("dark");
      }
    }
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};
