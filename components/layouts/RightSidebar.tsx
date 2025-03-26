import Link from "next/link";

export default function RightSidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sticky top-20">
      <h2 className="font-bold text-lg mb-4 dark:text-white">Listings</h2>
      <ul className="space-y-2">
        <li><Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Jobs</Link></li>
        <li><Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Events</Link></li>
        <li><Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Products</Link></li>
      </ul>

      <h2 className="font-bold text-lg mt-6 mb-4 dark:text-white">#discuss</h2>
      <ul className="space-y-2">
        <li><Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Latest discussions</Link></li>
        <li><Link href="#" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Popular this week</Link></li>
      </ul>
    </div>
  );
}