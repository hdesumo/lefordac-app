import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

// Liste des vidéos locales dans /public/videos/fordac
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
  const [autoPlay, setAutoPlay] = useState(true); // ✅ nouvel état

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

  // Auto-défilement vidéos si autoPlay est activé
  useEffect(() => {
    if (autoPlay) {
      window.carouselTimer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % videos.length);
      }, 12000);
    }

    return () => {
      if (window.carouselTimer) {
        clearInterval(window.carouselTimer);
      }
    };
  }, [autoPlay]);

  const stopCarousel = () => {
    if (window.carouselTimer) {
      clearInterval(window.carouselTimer);
      window.carouselTimer = null;
    }
  };

  const resumeCarousel = () => {
    if (autoPlay && !window.carouselTimer) {
      window.carouselTimer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % videos.length);
      }, 12000);
    }
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* === Colonne principale === */}
      <div className="md:col-span-2 space-y-10">
        <h1 className="text-3xl font-bold font-serif text-lefordac-primary">
          Actualités
        </h1>

        {/* Carrousel vidéo */}
        <div className="relative w-full bg-black rounded-lg overflow-hidden shadow">
          <video
            src={videos[current]}
            muted
            loop={false}
            controls
            autoPlay
            className="w-full h-[350px] object-cover rounded-lg"
            onPlay={stopCarousel}
            onPause={resumeCarousel}
            onEnded={() => {
              setCurrent((prev) => (prev + 1) % videos.length);
              resumeCarousel();
            }}
          />

          {/* Boutons navigation */}
          <button
            onClick={prevVideo}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
          >
            ◀
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
          >
            ▶
          </button>

          {/* Indicateurs */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {videos.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === current ? "bg-white" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>

          {/* Toggle autoplay */}
          <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-3 py-1 rounded cursor-pointer text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={() => setAutoPlay(!autoPlay)}
              />
              Autoplay
            </label>
          </div>
        </div>

        {/* Liste des articles */}
        <div className="space-y-8">
          {articles.length === 0 ? (
            <p className="text-gray-600">
              Aucune actualité disponible pour le moment.
            </p>
          ) : (
            articles.map((article) => (
              <div
                key={article.id}
                id={`article-${article.id}`}
                className="bg-white rounded-lg shadow p-6 space-y-3"
              >
                <h2 className="text-xl font-bold text-lefordac-primary">
                  {article.titre}
                </h2>
                <h3 className="text-md italic text-gray-600">
                  {article.sousTitre}
                </h3>
                {article.mediaUrl && (
                  <div className="my-4">
                    {article.mediaUrl.endsWith(".mp4") ? (
                      <video
                        controls
                        className="w-full rounded-lg shadow"
                        src={article.mediaUrl}
                        onPlay={stopCarousel}
                        onPause={resumeCarousel}
                        onEnded={resumeCarousel}
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
      </div>

      {/* === Sidebar dynamique === */}
      <Sidebar articles={articles} />
    </main>
  );
}
