import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Leadership() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Leadership</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold text-green-700">Romaric Yebchue Semenou</h2>
            <p className="text-gray-600">Président National</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold text-green-700">Équipe dirigeante</h2>
            <p className="text-gray-600">
              Les responsables régionaux, départementaux et communaux
              œuvrent pour rapprocher le FORDAC des populations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
