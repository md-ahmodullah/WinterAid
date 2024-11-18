/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        deepTeal: "#00796B",
        softPeach: "#FFDAB9",
        lightCoral: "#FF6F61",
        faWhite: "#FAFAFA ",
      },
    },
  },
  plugins: [require("daisyui")],
};
