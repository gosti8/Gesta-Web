/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gesta: {
          azul: '#0E5A7B',      // Azul Río
          verde: '#6AA84F',     // Verde Ribereño
          ocre: '#E1A24B',      // Ocre Caña
          tierra: '#7A4F35',    // Tierra Barro
          neutro: '#F5F6F5',    // Neutro Claro
          texto: '#1F2A2E',     // Negro Tipográfico
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}