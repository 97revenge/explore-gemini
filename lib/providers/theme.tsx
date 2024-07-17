"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";
import {
  getCookies,
  setCookie,
  hasCookie,
  deleteCookie,
  getCookie,
} from "cookies-next";

interface ThemeContextType {
  theme: string;
  switchTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const _theme = (getCookie("theme") as string) || "default"; // provide a default value
  const [theme, setTheme] = useState<string>(_theme);

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
    setCookie("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Optional: Create a custom hook for easy context access
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeContext precisa ser chamado por ThemeProvider contexto..."
    );
  }
  return context;
};
