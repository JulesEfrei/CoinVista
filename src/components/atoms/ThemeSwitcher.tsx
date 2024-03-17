"use client";

// import { Theme } from "@type/enumType";
import { useState } from "react";

enum Theme {
  dark = "dark",
  light = "light",
}

const ThemeSwitcher = ({ currTheme }: { currTheme: Theme }) => {
  const [theme, setTheme] = useState<Theme>(currTheme);

  const switchTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `x-coinvista-theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `x-coinvista-theme=${Theme.light}`;
    }
  };

  return (
    <>
      <button onClick={switchTheme}>Light</button>
      <br />
      <button onClick={switchTheme}>Dark</button>
    </>
  );
};

export default ThemeSwitcher;
