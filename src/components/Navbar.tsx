"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-gray-900 cursor-pointer">
              MyNextSite
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-10 py-2 text-lg rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <Search className="absolute right-4 top-3.5 w-6 h-4 text-gray-500 cursor-pointer" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/product" className="text-gray-700 hover:text-gray-900">
              Product
            </Link>

            {/* Log In Button */}
            <Link
              href="/login"
              className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>

            {/* Mobile Search Bar */}
            <div className="relative mt-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>

            {/* Mobile Log In Button */}
            <Link
              href="/login"
              className="block text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
