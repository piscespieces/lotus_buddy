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
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({});
    }
  ]
}
