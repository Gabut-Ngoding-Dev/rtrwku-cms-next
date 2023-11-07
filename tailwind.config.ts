/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        neutral: {
          10: "#ffffff",
          20: "#dcdcdc",
          30: "#d5d5d5",
          40: "#c9c9c9",
          50: "#aeaeae",
          60: "#8e8e8e",
          70: "#696969",
          80: "#575757",
          90: "#393939",
          100: "#090909",
        },
        primary: {
          main: "#1e40af",
          surface: "#d2d9ef",
          border: "#b4bfe4",
          hover: "#193592",
          pressed: "#0f2057",
          focus: "#1e40af",
        },
        danger: {
          main: "#cb3a31",
          surface: "#f5d8d6",
          border: "#eebdba",
          hover: "#a93029",
          pressed: "#872721",
        },
        success: {
          main: "#43936c",
          surface: "#d9e9e1",
          border: "#c0dbce",
          hover: "#387a5a",
          pressed: "#2d6248",
        },
        warning: {
          main: "#cd7b2e",
          surface: "#f5e4d5",
          border: "#eed3b9",
          hover: "#ab6626",
          pressed: "#89521f",
        },
        info: {
          main: "#3267e3",
          surface: "#d6e0f9",
          border: "#bbccf6",
          hover: "#aec0e6",
          pressed: "#193371",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
