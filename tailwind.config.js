module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin')],
  extend: {
    keyframes: {
      wiggle: {
        '0%': {
          transform: 'rotate(360deg) scale(0)',
        },
        '50%': {
          transform: 'rotate(0) scale(1.1)',
        },
      },
    },
    animation: {
      wiggle: 'wiggle 5s ease-in-out infinite',
    },
  },
};
