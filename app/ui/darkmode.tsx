/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeChanger = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <label htmlFor="theme" className="sr-only">
        theme
      </label>
      {currentTheme === 'light' ? (
        <MoonIcon
          onClick={() => setTheme('dark')}
          className={`w-[24px] h-[24px] cursor-pointer transition-[fill,stroke] fill-white stroke-black hover:fill-yellow-400 hover:stroke-yellow-400`}
        />
      ) : (
        <SunIcon
          onClick={() => setTheme('light')}
          className={`w-[24px] h-[24px] cursor-pointer transition-[fill,stroke] fill-white stroke-white hover:fill-yellow-400 hover:stroke-yellow-400`}
        />
      )}
    </>
  );
};

export default ThemeChanger;
