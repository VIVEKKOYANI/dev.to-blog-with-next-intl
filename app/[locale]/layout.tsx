import { ReactNode } from "react";
import { routing } from '@/i18n/routing';
import { notFound } from "next/navigation";
import { Inter } from 'next/font/google';
import "../globals.css";
import { FaDev } from 'react-icons/fa';
import NavBar from "@/components/layouts/NavBar";
import MobileSidebar from "@/components/layouts/MobileSidebar";
import LeftSidebar from "@/components/layouts/LeftSidebar";
import RightSidebar from "@/components/layouts/RightSidebar";

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  if (!routing.locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} className={inter.className}>
      <body className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <NavBar locale={locale} />
        <MobileSidebar locale={locale} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar (left) - Hidden on mobile */}
            <aside className="lg:w-1/4 hidden lg:block">
              <LeftSidebar locale={locale} />
            </aside>

            {/* Main Content Area */}
            <main className="lg:w-2/4">
              {children}
            </main>

            {/* Sidebar (right) - Hidden on mobile */}
            <aside className="lg:w-1/4 hidden lg:block">
              <RightSidebar />
            </aside>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <FaDev className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-lg font-bold dark:text-white">DEV Community</span>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} DEV Community
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}