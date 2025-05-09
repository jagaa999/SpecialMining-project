/** @type {import('tailwindcss').Config} */

const fs = require("fs");
const path = require("path");

const safelistIcons = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "./src/config/tailwind/safelist-icons.json"),
    "utf-8"
  )
);

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./atom/**/*.{js,ts,jsx,tsx}",
    // "./src/config/tailwind/**/*.{js,ts,jsx,tsx,json}",
  ],
  // safelist: safelistIcons,
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Roboto-г энд нэмнэ
      },
    },
  },
  // plugins: [require("@iconify/tailwind4")()],
  plugins: [require("@iconify/tailwind4")()],
};
