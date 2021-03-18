const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#252525',
        'white': '#FFFFFF',
        'blue': '#2000FF',
        'pink': '#FF1F7C',
        'teal': '#00E8C6',
        'yellow': '#FFA713',
        'purple': '#783CDC',
        'gray': {
          200: '#F5F7FA',
          400: '#E3E2E6',
          600: '#AEA9AB',
          800: '#5f5d5e',
        },
        'light-blue': '#E2E9F4',
        'sand': '#FFEBCA',
        'yellowAccent': '#fddd7e',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        10: '40px',
        20: '80px',
      },
      fontFamily: {
        'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
        'sohne': [
          'Sohne-Buch',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        'sohne-medium': ['Sohne-Kraftig'],
        'sohne-semibold': ['Sohne-Halbfett'],
        'sohne-bold': ['Sohne-Dreiviertelfett'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
