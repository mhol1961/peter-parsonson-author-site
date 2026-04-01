/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9488',
          light: '#14B8A6',
          dark: '#0F766E'
        },
        accent: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#B91C1C'
        },
        dark: {
          DEFAULT: '#0F172A',
          lighter: '#1E293B',
          card: '#162032'
        },
        cream: '#F5F0E8'
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#E2E8F0',
            a: {
              color: '#0D9488',
              '&:hover': {
                color: '#14B8A6'
              }
            }
          }
        }
      }
    }
  },
  plugins: []
};
