import { useEffect, useState } from "react";
import axios from "axios";

// Liste des vidéos (placées dans /public/videos/fordac)
const videos = [
  "/videos/fordac/video1.mp4",
  "/videos/fordac/video2.mp4",
  "/videos/fordac/video3.mp4",
  "/videos/fordac/video4.mp4",
  "/videos/fordac/video5.mp4",
  "/videos/fordac/video6.mp4",
  "/videos/fordac/video7.mp4",
  "/videos/fordac/video8.mp4",
  "/videos/fordac/video9.mp4",
  "/videos/fordac/video10.mp4",
];

export default function News() {
  const [articles, setArticles] = useState([]);
  const [current, setCurrent] = useState(0);

  // Récupération des articles depuis l’API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/news`
        );
        setArticles(res.data);
      } catch (err) {
        console.error("Erreur chargement actualités:", err);
      }
    };
    fetchArticles();
  }, []);

  // Lecture automatique des vidéos toutes les 12 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  // Fonctions navigation manuelle
  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <main className="w-full">
      {/* === Carrousel vidéo === */}
      <div className="relative w-full bg-black flex justify-center items-center">
        <video
          key={current}
          src={videos[current]}
          autoPlay
          muted
          loop
          controls={false}
          className="w-full max-h-[500px] object-cover"
        />

        {/* Boutons navigation */}
        <button
          onClick={prevVideo}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
        >
          ▶
        </button>
      </div>

      {/* === Liste des articles === */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold font-serif text-lefordac-primary mb-6">
          Actualités
        </h1>

        {articles.length === 0 ? (
          <p className="text-gray-600">Aucune actualité disponible pour le moment.</p>
        ) : (
          articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow p-6 space-y-3"
            >
              <h2 className="text-xl font-bold text-lefordac-primary">
                {article.titre}
              </h2>
              <h3 className="text-md italic text-gray-600">
                {article.sousTitre}
              </h3>
              {/* Image ou vidéo associée */}
              {article.mediaUrl && (
                <div className="my-4">
                  {article.mediaUrl.endsWith(".mp4") ? (
                    <video
                      controls
                      className="w-full rounded-lg shadow"
                      src={article.mediaUrl}
                    />
                  ) : (
                    <img
                      src={article.mediaUrl}
                      alt={article.titre}
                      className="w-full rounded-lg shadow"
                    />
                  )}
                </div>
              )}
              <p className="text-gray-800">{article.contenu}</p>
              <p className="text-xs text-gray-500">
                Publié le {new Date(article.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
