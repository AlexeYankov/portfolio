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
        'phone': 'url("/footer/contacts/mobile-solid.svg")',
        'mail': 'url("/footer/contacts/envelope-regular.svg")',
        'location': 'url("/footer/contacts/location-dot-solid.svg")',
      },
      rotate: {
        46: '-45deg',
      },
      colors: {
        'default': 'currentColor'
      }
    },
  },
  plugins: [],
};
