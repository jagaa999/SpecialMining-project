/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/config/tailwind/**/*.{js,ts,jsx,tsx,json}",
    "./atomv2/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Roboto-г энд нэмнэ
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
