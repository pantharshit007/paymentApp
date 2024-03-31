/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pay-light': '#00baf2',
        'pay-default': '#009be1',
        'pay-dark': '#042e6f'
      }
    },

  },
  plugins: [],
}

