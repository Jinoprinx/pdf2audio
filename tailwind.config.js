/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6c5ce7", // Purple gradient base
        secondary: "#81ecec", // Indigo complementary color
      },
    },
  },
  plugins: [],
};

