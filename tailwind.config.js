/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#7B5CFF',
          500: '#6A48FF',
          600: '#5533FF',
          700: '#4019FF',
          800: '#2B00FF',
          900: '#2400CC',
        },
        indigo: {
          400: '#6366F1',
          500: '#4F46E5',
          600: '#4338CA',
          700: '#3730A3',
          800: '#312E81',
          900: '#23215B',
        },
        cyan: {
          400: '#5CFFE7',
          500: '#43FEE2',
          600: '#20FEDC',
          700: '#02EBC9',
          800: '#01C8AC',
          900: '#01A48E',
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      aspectRatio: {
        '1/1': '1 / 1',
      },
    },
  },
  plugins: [],
};