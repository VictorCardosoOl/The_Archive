/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: '#f7f7f7',
          black: '#0a0a0a',
          gray: '#737373',
          surface: '#ffffff',
          light: '#e0e0e0',
        }
      },
      screens: {
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
          '3xl': '6rem',
          '4xl': '8rem',
        },
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        'screen-2xl': '1536px',
        'screen-3xl': '1920px',
        'screen-4xl': '2560px',
      },
      fontFamily: {
        serif: ['Bonny', 'serif'],
        sans: ['Clash Display', 'sans-serif'],
        panchang: ['Panchang', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
