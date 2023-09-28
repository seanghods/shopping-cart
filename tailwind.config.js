/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '1/10': '10%',
        '1/9': '11.111111%',
      },
    },
  },
  plugins: [],
};
