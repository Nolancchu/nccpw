/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ncc: {
          beige: "#eeebec",
          black: "#0F0A0A",
          grey: "#6D6875",
          white: "#F7F7FF",
          brown: "#1E140B",
          green: "#3B6662",
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  fontFamily: {
    
  },
  plugins: [],
}
}
}