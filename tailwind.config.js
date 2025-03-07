/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-1': '#0E111D',
        'dark-2': '#161923',
        'dark-3': '#1D212C',
        'dark-4': '#292D39',
        main: '#00A3FF',
        secondary: '#8E94AB',
      },
      fontFamily: {
        rocgrotesk: ['Rocgrotesk', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
