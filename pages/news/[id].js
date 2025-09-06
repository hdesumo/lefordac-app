import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news/${id}`);
        setNews(res.data);
      } catch (err) {
        console.error("Erreur chargement news:", err);
      }
    };
    fetchNews();
  }, [id]);

  if (!news) return <p className="p-8">Chargement...</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 bg-gray-50 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-2">{news.titre}</h1>
        {news.sousTitre && <h2 className="text-lg italic text-gray-500 mb-4">{news.sousTitre}</h2>}
        <p className="text-gray-700 mb-4">{news.contenu}</p>

        {news.mediaUrl && news.type === "video" && (
          <video controls className="w-full rounded mb-3">
            <source src={news.mediaUrl} type="video/mp4" />
          </video>
        )}
        {news.mediaUrl && news.type === "photo" && (
          <img src={news.mediaUrl} alt={news.titre} className="w-full rounded mb-3" />
        )}
      </main>
      <Footer />
      <div className="bg-gray-800 text-white text-center text-sm py-3">
        © 2025 le FORDAC — Conception et réalisation : Apps 1 Global
      </div>
    </div>
  );
}
