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
          DEFAULT: "#1A4D2E", // Deep Forest Green
          light: "#2F6B46",
          dark: "#11321F",
        },
        secondary: {
          DEFAULT: "#D6CFC7", // Earthy Taupe
          light: "#E8E4E0",
          dark: "#BDB5AB",
        },
        accent: {
          DEFAULT: "#E89F71", // Muted Terracotta/Gold for warmth
          hover: "#D68C5E",
        },
        surface: {
          DEFAULT: "#F9F9F8", // Off-white
          dark: "#F0F0ED",
        },
        text: {
          main: "#1F2937", // Dark Charcoal
          muted: "#6B7280",
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