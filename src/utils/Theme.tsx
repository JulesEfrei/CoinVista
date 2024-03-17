"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";

enum ThemeEnum {
  dark = "dark",
  light = "light",
}

const inter = Inter({ subsets: ["latin"] });
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currTheme, setCurrTheme] = useState(ThemeEnum.light);
  let systemTheme, storedTheme;

  useEffect(() => {
    systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    storedTheme = localStorage.getItem("theme") as ThemeEnum;

    setCurrTheme(storedTheme || systemTheme);
  }, []);

  const switchTheme = () => {
    const root = document.getElementsByTagName("body")[0];
    root.classList.toggle(ThemeEnum.dark);
    if (root.classList.contains(ThemeEnum.dark)) {
      setCurrTheme(ThemeEnum.dark);
      localStorage.setItem("theme", ThemeEnum.dark);
    } else {
      setCurrTheme(ThemeEnum.light);
      localStorage.setItem("theme", ThemeEnum.light);
    }
  };

  return (
    <ThemeContext.Provider value={{ currTheme, switchTheme }}>
      <body
        className={`${inter.className} ${currTheme} w-screen min-h-screen dark:text-white dark:bg-black`}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
