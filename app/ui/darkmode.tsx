/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeChanger = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="theme" className="sr-only">
        theme
      </label>
      {currentTheme === "light" ? (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className={`w-[18px] h-[18px] cursor-pointer`}
        />
      ) : (
        <SunIcon
          onClick={() => setTheme("light")}
          className={`w-[18px] h-[18px] cursor-pointer`}
        />
      )}
    </div>
  );
};

export default ThemeChanger;
