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
    </div>
  );
}
