import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-white">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Galerie</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-48 flex items-center justify-center rounded">
            <span className="text-gray-600">Photo 1</span>
          </div>
          <div className="bg-gray-200 h-48 flex items-center justify-center rounded">
            <span className="text-gray-600">Photo 2</span>
          </div>
          <div className="bg-gray-200 h-48 flex items-center justify-center rounded">
            <span className="text-gray-600">Vidéo 1</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
