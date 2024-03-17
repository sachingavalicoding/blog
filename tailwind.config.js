/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "hsl(93, 54%, 54%)",
        firstDark: "hsl(93, 50%, 48%)",
        firstLight: "hsl(93, 58%, 66%)",
        bodyColor: "hsl(228, 6%, 8%)",
        containerColor: "hsl(228, 6%, 12%)",
        shadowImg: "0 0 48px hsla(93, 54%, 54%, 0.4)",
      },
    },
  },
  plugins: [],
};
