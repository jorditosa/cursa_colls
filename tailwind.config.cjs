/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#3ca291',
      secondary: '#51dbc4',
      dark: '#223330',
      light: '#ffffff',
      error: '#991b1b',
      llarga: '#1c948b',
      curta: '#e7330e',
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
