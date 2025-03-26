"use client"
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import LeftSidebar from "./LeftSidebar";

export default function MobileSidebar({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg z-30 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold dark:text-white">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <LeftSidebar locale={locale} />
        </div>
      </div>
    </>
  );
}