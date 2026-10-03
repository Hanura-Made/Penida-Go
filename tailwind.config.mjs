/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0084ff',
          600: '#006ed6',
          700: '#0052a3',
          800: '#0e2a47',
          900: '#0b1d30',
          950: '#06111d'
        },
        tropical: {
          teal: '#0ea5e9',
          emerald: '#10b981',
          sand: '#faf9f6'
        },
        whatsapp: '#25D366'
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};
