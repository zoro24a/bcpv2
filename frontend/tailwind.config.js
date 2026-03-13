/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f172a',
        },
        primary: {
          500: '#1c7ed6',
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
