/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#179957",
        accentDark: "#184D47",
        pinkLogo: "#F62776",
      },
      container: {
        center: true,
        padding: "10px",
      },
    },
  },
  plugins: [],
});
