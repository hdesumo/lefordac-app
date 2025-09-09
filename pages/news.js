import { useEffect, useState } from "react";
import axios from "axios";

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

  // Charger les articles depuis l’API
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

  // Auto-défilement vidéos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  // Navigation manuelle
  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  // Article à la une (le premier avec highlight=true, sinon le premier article)
  const articleALaUne =
    articles.find((a) => a.highlight === true) || articles[0] || null;

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
            key={current}
            src={videos[current]}
            autoPlay
            muted
            loop
            controls
            className="w-full h-[350px] object-cover rounded-lg"
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

                {/* Média associé */}
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
      </div>

      {/* === Sidebar sticky === */}
      <aside className="space-y-6 self-start sticky top-24">
        {/* Bloc À la une */}
        {articleALaUne && (
          <a
            href={`#article-${articleALaUne.id}`}
            className="block bg-lefordac-light p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lefordac-primary mb-2">À la une</h3>

            {/* Image miniature si disponible */}
            {articleALaUne.mediaUrl &&
              (articleALaUne.mediaUrl.endsWith(".mp4") ? null : (
                <img
                  src={articleALaUne.mediaUrl}
                  alt={articleALaUne.titre}
                  className="w-full h-40 object-cover rounded mb-3 shadow"
                />
              ))}

            <h4 className="text-md font-semibold">{articleALaUne.titre}</h4>
            <p className="text-sm italic text-gray-600">
              {articleALaUne.sousTitre}
            </p>
            <span className="text-lefordac-secondary text-sm underline block mt-2">
              Lire l’article →
            </span>
          </a>
        )}

        {/* Dernières actus */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lefordac-primary mb-2">
            Dernières actus
          </h3>
          <ul className="space-y-2 text-sm">
            {articles.slice(0, 5).map((a) => (
              <li key={a.id}>
                <a
                  href={`#article-${a.id}`}
                  className="block hover:text-lefordac-secondary"
                >
                  {a.titre}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Liens rapides */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lefordac-primary mb-2">
            Liens rapides
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/president" className="hover:text-lefordac-secondary">
                Le mot du Président
              </a>
            </li>
            <li>
              <a href="/adherer" className="hover:text-lefordac-secondary">
                Adhérer
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-lefordac-secondary">
                Contact
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </main>
  );
}
