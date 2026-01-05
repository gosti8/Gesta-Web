/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00547c', // Official Brand Blue
          dark: '#003d5c',    // Darker shade for hover/backgrounds
        },
        secondary: {
          DEFAULT: "#6AA84F", // Verde Ribereño
          light: "#8BC273",
          dark: "#4D8036",
        },
        accent: {
          DEFAULT: "#E1A24B", // Ocre Caña
          hover: "#C68935",
        },
        surface: {
          DEFAULT: "#F5F6F5", // Off-white
          dark: "#E5E6E5",
        },
        text: {
          main: "#1F2A2E", // Dark
          muted: "#7A4F35", // Tierra
          light: "#F9FAFB",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}