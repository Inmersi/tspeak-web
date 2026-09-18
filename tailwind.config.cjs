/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Indica dónde Tailwind buscará clases CSS
  ],
  theme: {
    extend: {
      fontFamily: {
        rammetto: ["'RamettoOne'", "sans-serif"], // Fuente Rammetto One
        wellfleet: ["'Wellfleet'", "sans-serif"], // Fuente Wellfleet
      },
      fontWeight: {
        bold: "700", // Peso para texto grueso
      },
      colors: {
        primary: "#007bff",
        // Variante accesible del azul de marca: 6.70:1 sobre blanco
        // frente al 3.98:1 de primary, que no pasa WCAG AA en texto
        // normal. Se usa en enlaces y botones con texto.
        "primary-dark": "#1d4ed8",
      },
      spacing: {
        navbar: "64px", // Altura del navbar para referencias futuras
      },

    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
