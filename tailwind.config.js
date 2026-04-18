/** @type {import('tailwindcss').Config} */
// NOTE: Primary design tokens live in src/index.css @theme (Tailwind v4).
// This file is kept for plugin support and any v3-compat extensions.
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
