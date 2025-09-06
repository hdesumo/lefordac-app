import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-white">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Le Parti</h1>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Le FORDAC (Forces Démocratiques pour l’Action et le Changement) est
          un mouvement citoyen et politique engagé pour un Cameroun plus juste,
          équitable et prospère. Notre objectif est de donner la parole aux
          citoyens et d’agir pour le changement positif.
        </p>
      </main>
      <Footer />
    </div>
  );
}
