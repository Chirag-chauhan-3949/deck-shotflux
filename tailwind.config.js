/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Pitchdeck.tsx",
    "./slides/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-400': '#10b981',
        'green-500': '#10b981',
        'green-600': '#059669',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
      },
      animation: {
        'slide-in-right': 'slideInFromRight 0.4s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.4s ease-out forwards',
      }
    },
  },
  plugins: [],
}
