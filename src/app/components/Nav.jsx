import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo or App Name */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Courtside 3</Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-lg font-semibold hover:text-gray-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/teams"
              className="text-lg font-semibold hover:text-gray-400 transition-colors"
            >
              Teams
            </Link>
          </li>
          <li>
            <Link
              href="/players"
              className="text-lg font-semibold hover:text-gray-400 transition-colors"
            >
              Players
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-semibold hover:text-gray-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-semibold hover:text-gray-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}