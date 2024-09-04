// src/components/ThemeSwitcher.js
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon, DesktopComputerIcon } from '@heroicons/react/outline';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex justify-end items-center gap-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-100'}`}
        aria-label="Light Mode"
      >
        <SunIcon className="h-5 w-5 text-yellow-500" />
      </button>
      <div
        className={`flex transition-opacity duration-300 gap-1 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
          aria-label="Dark Mode"
        >
          <MoonIcon className="h-5 w-5 text-blue-500" />
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`p-2 rounded-full ${theme === 'system' ? 'bg-gray-400' : 'bg-gray-100'}`}
          aria-label="System Mode"
        >
          <DesktopComputerIcon className="h-5 w-5 text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
