
"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-pink-500  p-6 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold font-serif text-black animate-rotateFadeIn">
          <Link href="/">My Blog</Link>
        </h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block animate-bounceIn">
          <ul className="flex space-x-6 text-sm font-bold md:text-base font-serif">
            <li>
              <Link
                href="/"
                className="transition hover:shadow-glow duration-500 p-4 bg-cyan-500 text-black rounded-2xl "
              >
                Blog
              </Link>
            </li>
            
            <li>
              <Link
                href="/About"
                className="transition hover:shadow-glow duration-500 p-4 bg-cyan-500 text-black rounded-2xl "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="transition hover:shadow-glow duration-500 p-4 bg-cyan-500 text-black rounded-2xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="space-y-4 text-center text-sm">
            <li>
              <Link
                href="/"
                className="block hover:text-gray-200 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
            
            </li>
            <li>
              <Link
                href="/About"
                className="block hover: text-gray-200 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="block hover:text-gray-200 transition duration-300 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
