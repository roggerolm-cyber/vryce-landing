import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B2B43",
          white: "#FFFFFF",
          violet: "#7C3AED",
          coral: "#FF6B6B",
        }
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        tightest: '-0.04em',
      }
    },
  },
  plugins: [],
};
export default config;
