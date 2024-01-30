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
        'salmon-tan': '#ff8b00', //'#e2b16e',
        'salmon-green': '#00b7a6', //'#436823',
        'salmon-red': '#5b190d', //'#6b2d39',
        'salmon-light-g1': '#89909f',
        'salmon-light-g2' : '#dee9f7',
        'salmon-dark-g1': '#483c46',
        'salmon-dark-g2': '#455561',
        'dillon-orange': '#e2b16e',
        'dillon-blue': '#436823',
        'dillon-red': '#6b2d39',
      }
    }
  },
  plugins: [],
}
