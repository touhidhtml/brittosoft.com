/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        circle: 'circle 10s linear infinite',
        circle2: 'circle2 10s linear infinite',
      },
      keyframes: {
      circle: {
          '0%': { transform: 'rotate(0deg) translateX(var(--circle-translate)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--circle-translate)) rotate(-360deg)' },
        },
        circle2: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};


