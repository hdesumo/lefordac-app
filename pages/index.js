import Link from "next/link";
import News from "./news";

export default function Home() {
  return (
    <div>
      {/* Encart Mot du Président */}
      <section className="bg-lefordac-light py-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-lefordac-primary mb-4">
            Le mot du Président
          </h2>
          <p className="italic text-gray-700 mb-6">
            « Agir localement pour réussir nationalement »
          </p>
          <Link
            href="/president"
            className="inline-block bg-lefordac-primary text-white px-5 py-2 rounded hover:bg-lefordac-secondary transition"
          >
            Lire le discours complet
          </Link>
        </div>
      </section>

      {/* Section Actualités */}
      <News />
    </div>
  );
}
