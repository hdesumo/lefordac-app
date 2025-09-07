import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lefordac-light text-center border-t mt-8">
      <div className="p-6">
        {/* Navigation rapide */}
        <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
          <Link href="/about" className="hover:text-lefordac-primary">
            Le Parti
          </Link>
          <Link href="/leadership" className="hover:text-lefordac-primary">
            Leadership
          </Link>
          <Link href="/news" className="hover:text-lefordac-primary">
            Actualités
          </Link>
          <Link href="/galerie" className="hover:text-lefordac-primary">
            Galerie
          </Link>
          <Link href="/adherer" className="hover:text-lefordac-primary">
            Adhérer
          </Link>
          <Link href="/contact" className="hover:text-lefordac-primary">
            Contact
          </Link>
          <Link
            href="https://lefordac-admin.vercel.app"
            className="font-bold text-lefordac-primary hover:text-lefordac-secondary"
          >
            Connexion Admin
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lefordac-dark hover:text-blue-600"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lefordac-dark hover:text-sky-500"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lefordac-dark hover:text-red-600"
          >
            <Youtube size={20} />
          </a>
        </div>

        {/* Copyright + crédits */}
        <p className="text-sm text-lefordac-dark">
          © {new Date().getFullYear()} le FORDAC – Tous droits réservés.
        </p>
        <p className="text-xs text-lefordac-dark mt-2">
          Conception et réalisation :{" "}
          <span className="font-semibold text-lefordac-primary">
            Apps 1 Global
          </span>
        </p>
      </div>
    </footer>
  );
}
