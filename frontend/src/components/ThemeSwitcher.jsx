// src/components/ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon, DesktopComputerIcon } from '@heroicons/react/outline';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex space-x-4 items-center">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-100'}`}
        aria-label="Light Mode"
      >
        <SunIcon className="h-6 w-6 text-yellow-500" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
        aria-label="Dark Mode"
      >
        <MoonIcon className="h-6 w-6 text-blue-500" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full ${theme === 'system' ? 'bg-gray-400' : 'bg-gray-100'}`}
        aria-label="System Mode"
      >
        <DesktopComputerIcon className="h-6 w-6 text-green-500" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
