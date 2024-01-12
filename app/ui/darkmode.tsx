import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const DarkMode = () => {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="theme" className="sr-only">
        theme
      </label>
      <input
        type="radio"
        name="theme"
        id="themeDay"
        value="day"
        className="sr-only"
      />
      <label htmlFor="themeDay">
        <SunIcon className={`w-[18px] h-[18px] mr-3`} />
      </label>
      <input
        type="radio"
        name="theme"
        id="themeNight"
        value="night"
        className="sr-only"
      />
      <label htmlFor="themeNight">
        <MoonIcon className={`w-[18px] h-[18px]`} />
      </label>
      <button>
        
      </button>
    </div>
  );
};

export default DarkMode;
