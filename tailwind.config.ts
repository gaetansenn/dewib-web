import type { Config } from 'tailwindcss'

const colors = {
  primary: '#4c81f6',
  secondary: '#a1a1aa',
  custom: {
    black: '#222222',
    'black-2': '#2d2d2d'
  }
}

const config: Config = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        poppins: ['Poppins', 'Helvetica', 'sans-serif'],
      }
    },
  },
}

export default config