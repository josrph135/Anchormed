/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: ['Sora', 'san-serif']
      },
      colors: {
        primary: ['#70A3A4'],
        onprimary: ['#2B4E4F'],
        container: ['#F0F3F3'],
        secondary: ['#E0E7E8'],
        tertiary: ['#F0F3F3'],
        search: ['#9FB7B8']
        
      }
    },
  },
  plugins: [],
}

