/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        softcyan: {
          50: '#f1fdf8',
          100: '#d2f9e9',
          200: '#bdf7de',
          300: '#9ff3cf',
          400: '#8cf1c5',
          500: '#6fedb7',
          600: '#65d8a7',
          700: '#4fa882',
        },
        strongcyan: {
          50: '#eafbf2',
          100: '#bef3d8',
          200: '#9eedc5',
          300: '#72e5ab',
          400: '#57e09a',
          500: '#2dd881',
          600: '#29c575',
          700: '#20995c',
        },
        darkcyan: {
          50: '#edf6f5',
          100: '#c8e3df',
          200: '#aed6d0',
          300: '#88c3bb',
          400: '#71b8ad',
          500: '#4ea699',
          600: '#47978b',
          700: '#37766d',
          800:'2b5b54',
          900:'214640',
        },
        vividblue: {
          50: '#e6f5ff',
          100: '#b1deff',
          200: '#8ccfff',
          300: '#57b9ff',
          400: '#36abff',
          500: '#0496ff',
          600: '#0489e8',
          700: '#036bb5',
          800:'#02538c',
          900:'023f6b',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
