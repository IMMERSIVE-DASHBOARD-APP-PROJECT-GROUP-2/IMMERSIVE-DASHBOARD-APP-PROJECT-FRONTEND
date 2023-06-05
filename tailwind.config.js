/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "alta-blue": "#19345E",
        "alta-orange": "#F47522",
      },
    },
  },
  plugins: [require("daisyui")],
};
