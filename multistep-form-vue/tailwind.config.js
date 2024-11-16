/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
    "./formkit.theme.ts"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

