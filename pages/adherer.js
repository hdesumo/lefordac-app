import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { cameroonData } from "../utils/cameroon-data";

export default function Adherer() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    region: "",
    departement: "",
    arrondissement: "",
    photo: null,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const data = new FormData();
      data.append("nom", form.nom);
      data.append("prenom", form.prenom);
      data.append("email", form.email);
      data.append("telephone", form.telephone);
      data.append("region", form.region);
      data.append("departement", form.departement);
      data.append("arrondissement", form.arrondissement);
      if (form.photo) data.append("photo", form.photo);

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/members`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(
        "✅ Votre demande d'adhésion a bien été enregistrée ! Un responsable du parti dans votre localité prendra contact avec vous."
      );

      setForm({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        region: "",
        departement: "",
        arrondissement: "",
        photo: null,
      });
    } catch (err) {
      console.error("Erreur adhésion:", err);
      setMessage("❌ Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Adhérer au FORDAC</h1>

        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              message.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow rounded-lg space-y-4 max-w-xl"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={form.nom}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={form.prenom}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            name="telephone"
            placeholder="Téléphone"
            value={form.telephone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />

          {/* Région */}
          <select
            name="region"
            value={form.region}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">-- Sélectionner une Région --</option>
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
            className="border p-2 rounded w-full"
            required
          >
            <option value="">-- Sélectionner un Département --</option>
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
            className="border p-2 rounded w-full"
            required
          >
            <option value="">-- Sélectionner un Arrondissement --</option>
            {form.region &&
              form.departement &&
              cameroonData[form.region][form.departement].arrondissements.map((arr) => (
                <option key={arr} value={arr}>
                  {arr}
                </option>
              ))}
          </select>

          {/* Upload photo */}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded w-full"
          />
          {form.photo && (
            <p className="text-sm text-gray-600">Photo sé
