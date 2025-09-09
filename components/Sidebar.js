import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({ articles }) {
  const [events, setEvents] = useState([]);

  // Charger les événements
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/events`
        );
        setEvents(res.data);
      } catch (err) {
        console.error("Erreur chargement événements:", err);
      }
    };
    fetchEvents();
  }, []);

  // Choisir l’article à la une
  const articleALaUne =
    articles.find((a) => a.highlight === true) || articles[0] || null;

  return (
    <aside className="space-y-6 self-start sticky top-24">
      {/* Bloc À la une */}
      {articleALaUne && (
        <a
          href={`#article-${articleALaUne.id}`}
          className="block bg-lefordac-light p-4 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="font-bold text-lefordac-primary mb-2">À la une</h3>
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
        <h3 className="font-bold text-lefordac-primary mb-2">Liens rapides</h3>
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
          <li>
            <a href="/about" className="hover:text-lefordac-secondary">
              Statuts
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-lefordac-secondary">
              Agenda complet
            </a>
          </li>
        </ul>
      </section>

      {/* Agenda & événements */}
      <section className="bg-white p-4 rounded shadow">
        <h3 className="font-bold text-lefordac-primary mb-2">
          Agenda & Événements
        </h3>
        {events.length === 0 ? (
          <p className="text-gray-600 text-sm">Aucun événement à venir.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {events.map((event) => (
              <li key={event.id}>
                <span className="font-semibold">
                  {new Date(event.date).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "short",
                  })}
                  :
                </span>{" "}
                {event.titre} {event.lieu && <span>– {event.lieu}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Citation du jour */}
      <section className="bg-lefordac-primary text-white p-4 rounded shadow italic text-sm">
        « Agir localement pour réussir nationalement. »  
        <br />
        <span className="text-xs block mt-2">– FORDAC</span>
      </section>
    </aside>
  );
}
