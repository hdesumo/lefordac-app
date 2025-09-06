import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-green-50 p-6">
        <h1 className="text-4xl font-bold text-green-700">Bienvenue au FORDAC</h1>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
          Forces Démocratiques pour l’Action et le Changement<br />
          Un parti qui incarne la vision, l’action et le changement au service du peuple camerounais.
        </p>
      </main>
      <Footer />
    </div>
  );
}
