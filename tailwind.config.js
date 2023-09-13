import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky['800'],
        secondary: colors.amber['500'],
        neutral: colors.neutral['500']
      }
    }
  },
  plugins: []
}
