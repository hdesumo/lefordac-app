import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { cameroonData } from "../utils/cameroon-data";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    message: "",
    region: "",
    departement: "",
    arrondissement: "",
    ville: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, form);
      setSuccess(true);
      setForm({
        nom: "",
        email: "",
        message: "",
        region: "",
        departement: "",
        arrondissement: "",
        ville: ""
      });
    } catch (err) {
      console.error("Erreur:", err);
      alert("Impossible d’envoyer le message.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Contactez-nous</h1>

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            ✅ Votre message a été envoyé avec succès ! Un responsable local vous répondra bientôt.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-lg bg-white p-6 shadow rounded-lg space-y-4"
        >
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          ></textarea>

          {/* Région */}
          <select
            name="region"
            value={form.region}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Sélectionnez une Région --</option>
            {Object.keys(cameroonData).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>

          {/* Département */}
          <select
            name="departement"
            value={form.departement}
            onChange={handleChange}
            disabled={!form.region}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Sélectionnez un Département --</option>
            {form.region &&
              Object.keys(cameroonData[form.region]).map((dep) => (
                <option key={dep} value={dep}>
                  {dep}
                </option>
              ))}
          </select>

          {/* Arrondissement */}
          <select
            name="arrondissement"
            value={form.arrondissement}
            onChange={handleChange}
            disabled={!form.departement}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Sélectionnez un Arrondissement --</option>
            {form.region &&
              form.departement &&
              cameroonData[form.region][form.departement].arrondissements.map(
                (arr) => (
                  <option key={arr} value={arr}>
                    {arr}
                  </option>
                )
              )}
          </select>

          {/* Ville avec auto-complétion */}
          <input
            type="text"
            name="ville"
            list="ville-options"
            placeholder="Ville"
            value={form.ville}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <datalist id="ville-options">
            {form.region &&
              form.departement &&
              cameroonData[form.region][form.departement].villes.map((v) => (
                <option key={v} value={v} />
              ))}
          </datalist>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Envoyer
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
