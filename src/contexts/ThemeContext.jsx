import { createContext, useContext } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const value = useTheme();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useThemeContext = () => useContext(ThemeContext);