/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E90FF', // Cor personalizada
        lightBlue: '#B0E0E6',  // Azul claro
      },
    },
  },
  plugins: [],
};