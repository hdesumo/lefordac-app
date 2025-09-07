import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/news?page=1&limit=20`
        );
        setNews(res.data.news || res.data);
      } catch (err) {
        console.error("Erreur chargement news:", err);
      }
    };
    fetchNews();
  }, []);

  const marqueeNews = news.filter((n) => n.highlightMarquee);
  const carouselVideos = news.filter(
    (n) => n.type === "video" && n.highlightCarousel
  );
  const articles = news.filter(
    (n) => n.type === "article" || (!n.highlightCarousel && n.type !== "video")
  );

  return (
    <>
      {marqueeNews.length > 0 && (
        <div className="bg-lefordac-primary text-white py-2 overflow-hidden">
          <marquee behavior="scroll" direction="left" scrollamount="5" className="text-sm">
            {marqueeNews.map((a) => (
              <span key={a.id} className="mr-8">
                📌 <Link href={`/news/${a.id}`}>{a.titre}</Link>
              </span>
            ))}
          </marquee>
        </div>
      )}

      <main className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-lefordac-light">
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-3xl font-bold font-serif text-lefordac-primary mb-4">
            Actualités
          </h1>

          {carouselVideos.length > 0 && (
            <div className="bg-white shadow p-4 rounded-lg">
              <h2 className="text-2xl font-semibold text-lefordac-primary mb-3">
                Vidéos à la Une
              </h2>
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
              >
                {carouselVideos.map((v) => (
                  <SwiperSlide key={v.id}>
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-semibold mb-2">{v.titre}</h3>
                      {v.sousTitre && (
                        <p className="text-sm italic text-gray-500 mb-2">
                          {v.sousTitre}
                        </p>
                      )}
                      <video controls className="w-full rounded">
                        <source
                          src={`${process.env.NEXT_PUBLIC_API_URL}${v.mediaUrl}`}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {articles.map((n) => (
            <div key={n.id} className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold text-lefordac-primary">
                <Link href={`/news/${n.id}`}>{n.titre}</Link>
              </h2>
              {n.sousTitre && (
                <h3 className="text-md text-gray-500 italic">{n.sousTitre}</h3>
              )}
              <p className="text-lefordac-dark mb-2">
                {n.contenu && n.contenu.length > 120
                  ? n.contenu.slice(0, 120) + "..."
                  : n.contenu}
              </p>
              <Link
                href={`/news/${n.id}`}
                className="text-lefordac-secondary hover:underline"
              >
                Lire la suite →
              </Link>
            </div>
          ))}
        </div>

        <aside className="md:col-span-1 space-y-4">
          <h2 className="text-lg font-bold text-lefordac-primary">Autres infos</h2>
          <ul className="space-y-2 text-lefordac-dark text-sm">
            <li>📌 Vision & Valeurs</li>
            <li>📌 Discours du Président</li>
            <li>📌 Galerie Photos</li>
            <li>📌 Agenda des activités</li>
          </ul>
        </aside>
      </main>
    </>
  );
}
