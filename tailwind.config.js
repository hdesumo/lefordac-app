/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lefordac: {
          primary: "#166534",   // vert foncé FORDAC
          secondary: "#22c55e", // vert clair accent
          accent: "#facc15",    // jaune doré
          light: "#f3f4f6",     // gris clair
          dark: "#1f2937",      // gris foncé
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
