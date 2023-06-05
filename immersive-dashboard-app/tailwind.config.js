/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "alterra-blue": "#163050",
        "light-white": "rgba(255,255,255,0.17)",
        "alterra-orange" : "#F07539",
      },
      spacing: {
        '15px': '15px',
      },
    },
  },
  plugins: [require("daisyui")],
}

