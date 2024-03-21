"use client";

import { useContext } from "react";
import { ThemeContext } from "utils/Theme";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

const ThemeSwitcher = () => {
  const { currTheme, switchTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={switchTheme}
        className="border-1 border-gray-500 text-white py-2 px-3 rounded-md flex items-center h-full hover:border-white"
      >
        {currTheme === "dark" ? <BsMoonStars /> : <FiSun />}
      </button>
    </>
  );
};

export default ThemeSwitcher;
