const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity',
      },
      colors: {
        primary: {
          ...colors.yellow
        },
      },
      textColor: {
        DEFAULT: '#2a2b26'
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        body: {
          color: theme('textColor.DEFAULT')
        }, // Applies the default color to the body
      });
    }
  ]
}
