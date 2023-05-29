/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#2B2841",
        basedark: "#1B182D",

        rgba: "rgb(237 237 237 / 80%)",
        bgButton: "#FD757A",
        bgButtonHover: "#EE68A6",
        border: "#dadada",
        shadow: "#f9f9f9",

        white: "#fff",
        black: "#282828",
        red: "#E81123",
        gray900: "#898787",
        gray100: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
