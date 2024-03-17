"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "utils/Theme";

const ThemeSwitcher = () => {
  const { switchTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={switchTheme}>Light</button>
      <br />
      <button onClick={switchTheme}>Dark</button>
    </>
  );
};

export default ThemeSwitcher;
