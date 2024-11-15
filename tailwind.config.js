/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C590DD',
        secondary: '#C36AD1',
        accent: '#7e22ce',
        background: '#C36AD1',
      },
    },
  },
  plugins: [],
}
