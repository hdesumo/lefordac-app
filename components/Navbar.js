import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">FORDAC</h1>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline">Accueil</Link>
        <Link href="/about" className="hover:underline">Le Parti</Link>
        <Link href="/leadership" className="hover:underline">Leadership</Link>
        <Link href="/gallery" className="hover:underline">Galerie</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
