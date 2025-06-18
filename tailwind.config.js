/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/config/tailwind/**/*.{js,ts,jsx,tsx,json}",
    "./atomv2/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /theme-.+/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Roboto-г энд нэмнэ
      },
      boxShadow: {
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
        citizen: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)",
        cozysmall: "0px 4px 14px rgba(0, 0, 0, 0.03)",
        shadow2:
          "0 10px 20px rgba(0, 0, 0, 0.03), 0 -10px 20px rgba(0, 0, 0, 0.03), 10px 0 20px rgba(0, 0, 0, 0.03), -10px 0 20px rgba(0, 0, 0, 0.03)",
        big: "0 10px 20px rgba(0, 0, 0, 0.25), 0 -10px 20px rgba(0, 0, 0, 0.25), 10px 0 20px rgba(0, 0, 0, 0.25), -10px 0 20px rgba(0, 0, 0, 0.25)",
        motolight: "0 2px 4px rgba(0, 0, 0, 0.1)",
        motomedium: "0 4px 8px rgba(0, 0, 0, 0.2)",
        motodark: "0 6px 12px rgba(0, 0, 0, 0.7)",
        motoinner: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        motolight: "0 2px 2px rgba(0, 0, 0, 0.1)",
        motomedium: "0 4px 4px rgba(0, 0, 0, 0.3)",
        motodark: "0 6px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
