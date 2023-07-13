/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto, Arial, sans-serif'
      },
      colors: {
        'soft-purple-1': '#ccaedb',
        'soft-purple-2': '#b195c1',
      }
    },
  },
  plugins: [],
}