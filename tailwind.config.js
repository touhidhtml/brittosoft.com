/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      marquee: 'marquee 10s linear infinite',
      marquee2: 'marquee2 10s linear infinite',
      circle: 'circle 10s linear infinite',
      circle2: 'circle2 10s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      circle: {
        '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
        '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' },
      },
      circle2: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         scroll: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-100%)' }, // Scroll through entire width
//         },
//       },
//       animation: {
//         scroll: 'scroll 15s linear infinite', // Adjust duration as needed
//       },
//     },
//   },
//   plugins: [],
// };


