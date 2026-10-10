import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#EEF3FA",
          100: "#D8E2F0",
          200: "#AFC3DE",
          700: "#123156",
          800: "#0E2745",
          900: "#071527",
          950: "#040D1A",
        },
        sunset: {
          DEFAULT: "#F97316",
          50: "#FFF4EC",
          100: "#FFE5D3",
          400: "#FB8C3C",
          500: "#F97316",
          600: "#E45F0A",
        },
        lagoon: {
          DEFAULT: "#14B8A6",
          100: "#D7F5F1",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#F3E5B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(7, 21, 39, 0.35)",
        glow: "0 10px 40px -10px rgba(249, 115, 22, 0.55)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #F97316 0%, #2DD4BF 100%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
