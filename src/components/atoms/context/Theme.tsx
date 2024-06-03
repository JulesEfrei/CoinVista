"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";

enum ThemeEnum {
  dark = "dark",
  light = "light",
}

interface ThemeContext {
  currTheme: ThemeEnum;
  switchTheme: () => void;
}

const inter = Inter({ subsets: ["latin"] });
export const ThemeContext = createContext<ThemeContext>({
  currTheme: ThemeEnum.light,
  switchTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currTheme, setCurrTheme] = useState<ThemeEnum>(ThemeEnum.light);
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
      localStorage.setItem("theme", ThemeEnum.dark);
      setCurrTheme(ThemeEnum.dark);
    } else {
      localStorage.setItem("theme", ThemeEnum.light);
      setCurrTheme(ThemeEnum.light);
    }
  };

  return (
    <ThemeContext.Provider value={{ currTheme, switchTheme }}>
      <body
        className={`${inter.className} ${currTheme} w-screen min-h-dvh h-dvh dark:text-white dark:bg-black`}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
