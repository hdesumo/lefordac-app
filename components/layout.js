import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barre de navigation */}
      <Navbar />

      {/* Contenu principal */}
      <main className="flex-grow">{children}</main>

      {/* Pied de page */}
      <Footer />

      {/* Bandeau crédits (optionnel si déjà dans Footer) */}
      <div className="bg-gray-800 text-white text-center text-sm py-3">
        © {new Date().getFullYear()} le FORDAC — Conception et réalisation :{" "}
        <span className="font-semibold text-lefordac-secondary">
          Apps 1 Global
        </span>
      </div>
    </div>
  );
}
