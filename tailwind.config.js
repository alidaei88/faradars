/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cardShadow': '0px 1px 1px -5px rgba(0, 0, 0, 0.3)',
      }
    },
    animation: {
      bgFooter: 'pulse 4s ease-in-out infinite',
    },
    screens: {
      "xxsm": '150px',
      // => @media (min-width: 640px) { ... }

      "xsm": '315px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
};
