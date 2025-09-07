export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 md:px-12 py-16 bg-lefordac-light">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-lefordac-primary">
        Bienvenue au FORDAC
      </h1>
      <p className="text-lg md:text-xl text-lefordac-dark mb-8 max-w-2xl">
        Forces Démocratiques pour l’Action et le Changement<br />
        Un parti qui incarne la vision, l’action et le changement au service du peuple camerounais.
      </p>

      {/* Section valeurs */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold text-lefordac-primary mb-2">Unité</h3>
          <p>Rassembler les forces démocratiques pour un avenir commun.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold text-lefordac-primary mb-2">Action</h3>
          <p>Passer des paroles aux actes pour transformer la société.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold text-lefordac-primary mb-2">Changement</h3>
          <p>Construire une démocratie forte et inclusive.</p>
        </div>
      </div>
    </main>
  );
}
