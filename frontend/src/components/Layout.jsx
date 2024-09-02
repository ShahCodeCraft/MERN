// src/components/Layout.js
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4 hidden justify-between items-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl">My Project</h1>
        <ThemeSwitcher />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
