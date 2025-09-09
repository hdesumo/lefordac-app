import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icônes hamburger

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lefordac-primary text-white shadow">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo + Nom */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-fordac.png"
            alt="FORDAC Logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg">FORDAC</span>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex flex-1 justify-start space-x-6 ml-8">
          <Link href="/" className="hover:text-lefordac-secondary">
            Accueil
          </Link>
          <Link href="/about" className="hover:text-lefordac-secondary">
            Qui sommes-nous
          </Link>
          <Link href="/news" className="hover:text-lefordac-secondary">
            Actualités
          </Link>
          <Link href="/adherer" className="hover:text-lefordac-secondary">
            Adhérer
          </Link>
          <Link href="/contact" className="hover:text-lefordac-secondary">
            Contact
          </Link>
        </div>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-lefordac-primary text-white px-4 pb-4 space-y-2">
          <Link
            href="/"
            className="block hover:text-lefordac-secondary"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className="block hover:text-lefordac-secondary"
            onClick={() => setIsOpen(false)}
          >
            Qui sommes-nous
          </Link>
          <Link
            href="/news"
            className="block hover:text-lefordac-secondary"
            onClick={() => setIsOpen(false)}
          >
            Actualités
          </Link>
          <Link
            href="/adherer"
            className="block hover:text-lefordac-secondary"
            onClick={() => setIsOpen(false)}
          >
            Adhérer
          </Link>
          <Link
            href="/contact"
            className="block hover:text-lefordac-secondary"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
