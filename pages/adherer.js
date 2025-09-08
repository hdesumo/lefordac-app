import { useState } from "react";
import axios from "axios";
import { cameroonData } from "../utils/cameroon-data";

export default function Adherer() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    region: "",
    departement: "",
    arrondissement: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/members`, form);
      setStatus("Votre adhésion a été enregistrée ✅");
      setForm({
        nom: "",
        telephone: "",
        region: "",
        departement: "",
        arrondissement: "",
      });
    } catch (error) {
      console.error("Erreur adhésion:", error);
      setStatus("Une erreur est survenue ❌");
    }
  };

  const regions = Object.keys(cameroonData);
  const departements =
    form.region && cameroonData[form.region]
      ? Object.keys(cameroonData[form.region])
      : [];
  const arrondissements =
    form.region &&
    form.departement &&
    cameroonData[form.region] &&
    cameroonData[form.region][form.departement]
      ? cameroonData[form.region][form.departement]
      : [];

  return (
    <main className="p-8 max-w-xl mx-auto bg-lefordac-light">
      <h1 className="text-3xl font-bold font-serif text-center text-lefordac-primary mb-6">
        Formulaire d’adhésion
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          value={form.nom}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Téléphone"
          value={form.telephone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Région */}
        <select
          name="region"
          value={form.region}
          onChange={(e) =>
            setForm({
              ...form,
              region: e.target.value,
              departement: "",
              arrondissement: "",
            })
          }
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Sélectionnez une région</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        {/* Département */}
        {form.region && (
          <select
            name="departement"
            value={form.departement}
            onChange={(e) =>
              setForm({
                ...form,
                departement: e.target.value,
                arrondissement: "",
              })
            }
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Sélectionnez un département</option>
            {departements.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        )}

        {/* Arrondissement */}
        {form.departement && (
          <select
            name="arrondissement"
            value={form.arrondissement}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Sélectionnez un arrondissement</option>
            {arrondissements.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        )}

        <button
          type="submit"
          className="bg-lefordac-primary text-white px-4 py-2 rounded hover:bg-lefordac-secondary"
        >
          Envoyer
        </button>

        {status && <p className="mt-2 text-sm font-medium">{status}</p>}
      </form>
    </main>
  );
}
