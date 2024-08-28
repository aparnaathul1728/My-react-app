/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        bblack: '#322625',
        ggrey: '#ebebeb',
        bblue: '#c0e3e5',
        yyellow: '#fdc936',
        lblack:'#4a3f3b',
        lyellow:'#fdf1d9'
      },
      fontFamily: {
        neutra: ['Neutra Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

