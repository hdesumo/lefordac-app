import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lefordac-light border-t mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8 text-sm">
        
        {/* QUI SOMMES-NOUS */}
        <div>
          <h3 className="font-bold text-lefordac-primary mb-3">QUI SOMMES-NOUS</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/president" className="hover:text-lefordac-primary">
                Le mot du Président
              </Link>
            </li>
            <li>
              <Link href="/equipe" className="hover:text-lefordac-primary">
                Notre équipe
              </Link>
            </li>
            <li>
              <Link href="/conseil" className="hover:text-lefordac-primary">
                Conseil stratégique
              </Link>
            </li>
            <li>
              <Link href="/instances" className="hover:text-lefordac-primary">
                Nos instances
              </Link>
            </li>
            <li>
              <Link href="/statuts" className="hover:text-lefordac-primary">
                Les statuts
              </Link>
            </li>
          </ul>
        </div>

        {/* ACTUALITÉS */}
        <div>
          <h3 className="font-bold text-lefordac-primary mb-3">ACTUALITÉS</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/news" className="hover:text-lefordac-primary">
                Nos articles
              </Link>
            </li>
            <li>
              <Link href="/galerie" className="hover:text-lefordac-primary">
                Photos & vidéos
              </Link>
            </li>
          </ul>
        </div>

        {/* NOS IDÉES */}
        <div>
          <h3 className="font-bold text-lefordac-primary mb-3">NOS IDÉES</h3>
          <ul className="space-y-2">
            <li>Démocratie participative</li>
            <li>Bonne gouvernance</li>
            <li>Égalité des chances</li>
            <li>Jeunesse & innovation</li>
            <li>Décentralisation efficace</li>
          </ul>
        </div>

        {/* NOUS REJOINDRE */}
        <div>
          <h3 className="font-bold text-lefordac-primary mb-3">NOUS REJOINDRE</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/adherer" className="hover:text-lefordac-primary">
                Adhérer
              </Link>
            </li>
            <li>
              <Link href="/contribuer" className="hover:text-lefordac-primary">
                Contribuer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-lefordac-primary">
                Contact
              </Link>
            </li>
          </ul>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lefordac-dark hover:text-blue-600"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lefordac-dark hover:text-sky-500"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lefordac-dark hover:text-red-600"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-white text-center text-xs py-3">
        © {new Date().getFullYear()} le FORDAC – Conception et réalisation :{" "}
        <span className="font-semibold text-lefordac-secondary">
          Apps 1 Global
        </span>
      </div>
    </footer>
  );
}
