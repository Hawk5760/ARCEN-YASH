/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F4F0EA',
          200: '#EAE4D8',
          300: '#DDD5C4',
        },
        charcoal: {
          900: '#141413',
          800: '#222222',
          700: '#333333',
          600: '#4F4E4A',
          500: '#6B6B6B',
          400: '#8A8883',
        },
        bronze: {
          900: '#4E3113',
          800: '#6B4219',
          DEFAULT: '#8A5A2B',
          600: '#A36D36',
          500: '#B88B58',
          400: '#CCA77C',
          300: '#DFC2A3',
          200: '#EEDFCC',
          100: '#F7EFE4',
        },
        divider: '#D8D2C4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        editorial: '0.25em',
        widest: '0.2em',
        tightest: '-0.035em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(26, 25, 24, 0.05)',
        'luxury-hover': '0 30px 60px -20px rgba(138, 90, 43, 0.12)',
        'cad': 'inset 0 0 0 1px rgba(216, 210, 196, 0.7), 0 8px 24px -6px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
