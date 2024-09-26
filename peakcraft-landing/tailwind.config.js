/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accentOrange: "var(--accentOrange)",
        accentRed: "var(--accentRed)",
        accentTeal: "var(--accentTeal)",
        accentNavy: "var(--accentNavy)",
      },
      fontFamily: {
        alata: ['var(--fontAlata)', 'Helvetica'],
        poppins: ['var(--fontPoppins)', 'Arial'],
        oswald: ['var(--fontOswald)', 'sans serif'],
      },
      screens: {
        lgd: '1025px',
        mdd: '481px',
        navmd: '769px',
      },
      boxShadow: {
        '3xl': '0px 0px 80px -12px rgba(18, 44, 98, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-stroke'),
  ],
};
