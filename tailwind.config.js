/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins:[],
  
};
