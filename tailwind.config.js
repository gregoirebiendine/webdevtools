/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto, Arial, sans-serif',
        'primary': '"Open Sans", sans-serif'
      },
      colors: {
        'primary': '#804bb2',
      },
      backgroundImage: {
        'custom': 'url("/bg.svg")'
      }
    },
  },
  plugins: [],
}