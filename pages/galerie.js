import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Galerie() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`);
        setGallery(res.data);
      } catch (err) {
        console.error("Erreur chargement galerie:", err);
      }
    };
    fetchGallery();
  }, []);

  const photos = gallery.filter((g) => g.type === "photo");
  const videos = gallery.filter((g) => g.type === "video");

  return (
    <main className="flex-grow p-6 md:px-12 bg-lefordac-light space-y-8">
      <h1 className="text-3xl font-bold font-serif text-lefordac-primary mb-4">
        Galerie
      </h1>

      {/* 🎥 Carrousel vidéos */}
      {videos.length > 0 && (
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-lefordac-primary mb-3">Vidéos</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
          >
            {videos.map((v) => (
              <SwiperSlide key={v.id}>
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-2">{v.titre}</h3>
                  {v.description && (
                    <p className="text-sm italic text-gray-500 mb-2">{v.description}</p>
                  )}
                  <video controls className="w-full rounded">
                    <source src={`${process.env.NEXT_PUBLIC_API_URL}${v.mediaUrl}`} type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* 🖼️ Carrousel photos */}
      {photos.length > 0 && (
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-lefordac-primary mb-3">Photos</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {photos.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="flex flex-col items-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${p.mediaUrl}`}
                    alt={p.titre}
                    className="rounded shadow-md"
                  />
                  <h3 className="text-sm mt-2">{p.titre}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </main>
  );
}
