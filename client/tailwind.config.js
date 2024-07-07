
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      utilities: {
        '.hide-scrollbar': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',  // Firefox
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),],
}

