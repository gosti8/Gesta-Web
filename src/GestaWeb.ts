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
          azul: '#0E5A7B',      // Azul Río [cite: 157, 174]
          verde: '#6AA84F',     // Verde Ribereño [cite: 158, 179]
          ocre: '#E1A24B',      // Ocre Caña [cite: 159, 185]
          tierra: '#7A4F35',    // Tierra Barro [cite: 160, 190]
          neutro: '#F5F6F5',    // Neutro Claro [cite: 161, 196]
          texto: '#1F2A2E',     // Negro Tipográfico [cite: 162, 201]
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],       // Cuerpo [cite: 254]
        display: ['Montserrat', 'sans-serif'], // Títulos [cite: 227]
      },
    },
  },
  plugins: [],
}