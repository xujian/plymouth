/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    darkTheme: 'synthwave',
  }
}
