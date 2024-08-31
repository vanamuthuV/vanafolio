/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"], // Set Source Sans 3 as the default sans font
      },
    },
  },
  plugins: [],
};
