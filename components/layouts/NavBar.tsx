"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaDev,
  FaSearch,
  FaBell,
  FaBookmark,
  FaComments,
  FaBars,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

export default function NavBar({ locale }: { locale: string }) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme preference or system preference
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex-shrink-0 flex items-center">
              <FaDev className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold hidden sm:block dark:text-white">DEV</span>
            </Link>

            {/* Search Bar */}
            <div className="ml-6 relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white sm:text-sm"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button - only visible on small screens */}
            <button className="lg:hidden p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <FaBars className="h-6 w-6" />
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <select
                value={locale}
                onChange={(e) => {
                  window.location.href = `/${e.target.value}${pathname?.replace(new RegExp(`^/${locale}`), '') || ''}`;
                }}
                className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-1 pl-2 pr-8 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            {/* <button
              onClick={toggleDarkMode}
              className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {darkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
            </button> */}

            {/* Notification Icons */}
            <button className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none hidden md:block">
              <FaBell className="h-6 w-6" />
            </button>
            <button className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none hidden md:block">
              <FaBookmark className="h-6 w-6" />
            </button>
            <button className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none hidden md:block">
              <FaComments className="h-6 w-6" />
            </button>

            {/* User Avatar */}
            <div className="ml-4 flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--iH8U3QwS--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png"
                alt="User profile"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}