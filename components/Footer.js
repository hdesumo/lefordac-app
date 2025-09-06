export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} FORDAC - Forces Démocratiques pour l’Action et le Changement.  
        <br />
        Siège national : Douala, Cameroun.
      </p>
    </footer>
  );
}
