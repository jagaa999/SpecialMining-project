/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./atom/**/*.{js,ts,jsx,tsx}",
    "./src/config/tailwind/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Roboto-г энд нэмнэ
      },
    },
  },
  plugins: [],
};
