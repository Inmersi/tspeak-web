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
