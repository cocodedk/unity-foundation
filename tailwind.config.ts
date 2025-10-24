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
        primary: {
          DEFAULT: '#4FA8A8',
          hover: '#E88C7A'
        },
        text: {
          primary: '#33373A',
          light: '#F8F7F3'
        },
        background: {
          light: '#F8F7F3',
          sand: '#D4C8B5'
        },
        accent: '#E88C7A',
        border: '#D4C8B5'
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['34px', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        body: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        sm: ['14px', { lineHeight: '1.4', fontWeight: '400' }]
      },
      fontFamily: {
        sans: [
          'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif'
        ]
      },
      spacing: {
        section: '80px',
        component: '24px'
      },
      borderRadius: {
        lg: '8px',
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
