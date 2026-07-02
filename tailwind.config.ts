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
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B88A1F",
          light: "#F2D16B",
        },
        rich: {
          black: "#0D0D0D",
          gray: "#1A1A1A",
          surface1: "#1A1A1A",
          surface2: "#222222",
        },
      },
    },
  },
  plugins: [],
};
export default config;