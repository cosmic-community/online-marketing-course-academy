/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7ff',
          100: '#f4f0ff',
          200: '#e9e0ff',
          300: '#d4c2ff',
          400: '#b794ff',
          500: '#9c66ff',
          600: '#8442ff',
          700: '#7629f7',
          800: '#6820e3',
          900: '#5a1cbf',
        },
        accent: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#f9ddff',
          300: '#f4bbff',
          400: '#ec89ff',
          500: '#e056fd',
          600: '#d333ea',
          700: '#b926ce',
          800: '#9923a8',
          900: '#7c1d87',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'stripe': '0 2px 10px rgba(0, 0, 0, 0.08)',
        'stripe-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}