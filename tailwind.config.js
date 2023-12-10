/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
//  important:true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,json,ts,jsx.tsx,mdx,json}"
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'salmon-tan': '#e2b16e',
        'salmon-green': '#436823',
        'salmon-red': '#6b2d39',
        'dillon-orange': '#f68b20',
        'dillon-blue': '#09b8a7',
        'dillon-red': '#5a190f',
      }
    }
  },
  plugins: [],
}
