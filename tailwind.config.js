/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,vue}",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F82C15',
        secondary: '#C40E60',
      },
      boxShadow: {
        card: '0px 1px 10px -2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}