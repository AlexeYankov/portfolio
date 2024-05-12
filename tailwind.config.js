/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      content: {
        link: 'url("./public/icons/finger-pointer.svg")',
      },
      rotate: {
        '46': '-45deg'
      },
      lineHeight: {
        'extra-loose': '2.5',
        2: '0.2rem',
      },
      // backgroundImage: {
      //   'button': "url('./public/other/button.webp')",
      // },
    },
    // colors: {
    //   '--pink': 'hsl(338, 70%, 55%)',
    //   '--teal': 'hsl(183, 70%, 62%)',
    //   '--white': 'hsl(334, 7%, 95%)',
    // },
  },
  plugins: [],
};
