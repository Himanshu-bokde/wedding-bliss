"use client";
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "",
}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    console.log("Applying theme:", theme); // Add this to verify
    root.classList.remove("light", "dark");
    root.classList.add(theme); // Adds the "dark" or "light" class to <html>
  }, [theme]);
  

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
