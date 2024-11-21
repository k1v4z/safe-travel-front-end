import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        boatMove: {
          '0%': { transform: 'translate(100%, 100%)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        boatMove: 'boatMove 2s ease-in-out forwards',
        spin: "spin 2s linear infinite",
        "spin-fast": "spin 1s linear infinite",
      },
      fontFamily: {
        romana: ['"Romana BT"', 'serif'],
        poppins: ['"Poppins"', 'serif'],
        maname: ['"Maname"', 'serif'],
        inter: ['"Inter"', 'serif'],
        gideonroman: ['"GideonRoman"', 'serif'],
        roboto_light: ['"Roboto-Light"', 'serif'],
        lato: ["Lato", 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
