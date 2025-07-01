'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Auto-close mobile menu
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-[#f9f5f0] shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 text-[#3e3028]">
        <Link href="#hero">
          <div className="flex items-center gap-4 cursor-pointer">
            <Image src="/logo.png" alt="Logo" width={58} height={58} />
            <h1 className="text-xl font-bold text-[#8b5e3c] leading-tight">
              Dr. Serena Blake<br />
              Psychological Services
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-12 font-medium text-lg">
          <li>
            <Link
              href="#about"
              className="cursor-pointer hover:underline text-[#8b5e3c] underline-offset-4 transition font-garamond"
            >
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:underline text-[#8b5e3c]">Services</Link>
          </li>
          <li>
            <Link href="#faq" className="hover:underline text-[#8b5e3c]">FAQ</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline text-[#8b5e3c]">Contact</Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 text-[#072c27] bg-white shadow-md">
          <ul className="space-y-2 font-medium text-sm">
            <li>
              <Link href="#about" onClick={handleLinkClick} className="block hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={handleLinkClick} className="block hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#faq" onClick={handleLinkClick} className="block hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={handleLinkClick} className="block hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
