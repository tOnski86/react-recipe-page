/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        youngSerif: ['"Young Serif"', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      stone: {
        100: 'hsl(30, 54%, 90%)',
        150: 'hsl(30, 18%, 87%)',
        600: 'hsl(30, 10%, 34%)',
        900: 'hsl(24, 5%, 18%)',
      },
      brown: 'hsl(14, 45%, 36%)',
      rose: {
        800: 'hsl(332, 51%, 32%)',
        50: 'hsl(330, 100%, 98%)',
      },
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px

- Family: [Young Serif](https://fonts.google.com/specimen/Young+Serif)
- Weights: 400

- Family: [Outfit](https://fonts.google.com/specimen/Outfit)
- Weights: 400, 600, 700
*/
