export default function Leadership() {
  return (
    <main className="px-6 md:px-12 py-16 bg-lefordac-light">
      <h1 className="text-3xl font-bold font-serif text-lefordac-primary mb-8">
        Leadership
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-lefordac-primary">
            Romaric Yebchue Semenou
          </h2>
          <p className="text-lefordac-dark">Président National</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-lefordac-primary">
            Équipe dirigeante
          </h2>
          <p className="text-lefordac-dark">
            Les responsables régionaux, départementaux et communaux œuvrent
            pour rapprocher le FORDAC des populations.
          </p>
        </div>
      </div>
    </main>
  );
}
