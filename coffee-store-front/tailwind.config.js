/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        100: "#F7F7F7",
        200: "#ECEAE3",
        300: "#5C5B5B",
      },
      white: "#FFF",
      dark: "#1B1A1A",
      primary: "#331A15",
      accent: "#D2B48C",
    },
    extend: {
      fontFamily: {
        Rancho: "Rancho, cursive",
      },
    },
  },
  plugins: [],
};
