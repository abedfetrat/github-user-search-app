const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1110px'
    },
    colors: {
      'transparent': 'transparent',
      'inherit': 'inherit',
      'blue-sparkle': '#0079ff',
      'abi-blue': '#60abff',
      'searching-blue': '#697c9a',
      'san-marino': '#4b6a9b',
      'anchors-aweigh': '#2b3442',
      'ghost-white': '#f6f8ff',
      'white': '#ffffff',
      'white-as-heaven': '#fefefe',
      'hei-se-black': '#141d2f',
      'fainting-light': '#1e2a47',
      'tart-orange': '#f74646'
    },
    fontFamily: {
      "sans": ["Space Mono", "monospace"]
    },
    extend: {
      gridTemplateColumns: {
        'detail': '70px 1fr',
        'detail-large': '117px 1fr'
      },
      keyframes: {
        shoot: {
          '0%': {left: '-200px'},
          '100%': {left: '100%'}
        },
        slideup: {
          '0%': {opacity: '0', transform: 'translateY(100vh)'},
          '100%': {opacity: '1', transform: 'translateY(0)'}
        }
      },
      animation: {
        shoot: 'shoot 1.2s ease-in infinite',
        slideup: 'slideup 500ms cubic-bezier(0, 0, 0.01, 1.02)'
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus', '&:active']),
      addVariant('group-hocus', [':merge(.group):hover &', ':merge(.group):focus &', ':merge(.group):active &'])
    })
  ],
}