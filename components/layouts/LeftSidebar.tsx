import Link from "next/link";

export default function LeftSidebar({ locale }: { locale: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sticky top-20">
      <h2 className="font-bold text-lg mb-4 dark:text-white">DEV Community</h2>
      <ul className="space-y-2">
        <li><Link href={`/${locale}`} className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Home</Link></li>
        <li><Link href={`/${locale}/articles`} className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Articles</Link></li>
        <li><Link href={`/${locale}/podcasts`} className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Podcasts</Link></li>
        <li><Link href={`/${locale}/videos`} className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Videos</Link></li>
        <li><Link href={`/${locale}/tags`} className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Tags</Link></li>
      </ul>
    </div>
  );
}