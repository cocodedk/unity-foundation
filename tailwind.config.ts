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
        skyhope: '#5EC4E4',      // primary
        seedwhite: '#F8F9F9',    // surfaces
        fluff: '#E3E7E9',        // subtle lines/shadows
        stem: '#BBA37A',         // warm accent
        growth: '#3A6E6E',       // headings / primary actions
        wind: '#8E6E4B',         // body text
        coral: '#E88C7A',        // CTA / hover
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
