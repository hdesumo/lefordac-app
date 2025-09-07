import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-lefordac-primary text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">FORDAC</h1>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-lefordac-accent">
          Accueil
        </Link>
        <Link href="/about" className="hover:text-lefordac-accent">
          Le Parti
        </Link>
        <Link href="/leadership" className="hover:text-lefordac-accent">
          Leadership
        </Link>
        <Link href="/actualites" className="hover:text-lefordac-accent">
          Actualités
        </Link>
        <Link href="/galerie" className="hover:text-lefordac-accent">
          Galerie
        </Link>
        <Link href="/adherer" className="hover:text-lefordac-accent">
          Adhérer
        </Link>
        <Link href="/contact" className="hover:text-lefordac-accent">
          Contact
        </Link>
      </div>
    </nav>
  );
}
