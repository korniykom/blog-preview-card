/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        customShadow: "8px 8px 0 rgb(0,0,0)",
      },
      fontFamily: {
        sans: "Figtree",
      },
    },
  },
  plugins: [],
};
