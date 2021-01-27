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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
