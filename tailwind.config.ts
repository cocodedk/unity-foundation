import type {Config} from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0E7490',
          light: '#38BDF8',
          dark: '#155E75'
        },
        accent: '#E6C200',
        beige: '#F8F6F2'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        soft: '0 10px 25px -15px rgba(0,0,0,0.2)'
      }
    }
  },
  plugins: [typography]
};

export default config;
