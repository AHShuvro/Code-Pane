/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1400px',
        'xxl': '1900px',
        'xxxl': '2200px'
      },
      container: {
        center: true,
        padding: {
          default: '0rem',
          sm: '0rem',
          md: '0rem',
          lg: '0rem',
          xl: '0rem',
        },
      },
    },
  },
  plugins: [],
}

