/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'brand-lightest-grey': 'hsl(0, 0%, 96%)',
        'brand-light-grey': 'hsl(0, 0%, 87%)',
      },
      backgroundImage: {
        brand:
          'linear-gradient(26.57deg, #FFC593 0.42%, #BC7198 43.46%, #5A77FF 83.33%)',
      },
    },
  },
  plugins: [],
};
