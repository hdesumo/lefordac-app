import { useState, useEffect } from "react";

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

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 12000); // chaque vidéo dure 12s avant de passer à la suivante
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black flex justify-center items-center">
      <video
        key={current}
        src={videos[current]}
        autoPlay
        muted
        controls={false}
        className="w-full max-h-[500px] object-cover"
      />
    </div>
  );
}
