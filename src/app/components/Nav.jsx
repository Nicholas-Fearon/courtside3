import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Nav() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-gray-300 transition">
          Courtside 3
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {[
            { href: "/", label: "Home" },
            { href: "/teams", label: "Teams" },
            { href: "/players", label: "Players" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-lg font-medium hover:text-gray-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-md hover:bg-gray-200 transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}