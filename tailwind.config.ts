import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bellefair: ["var(--font-bellefair)"],
      barlow: ["var(--font-barlow)"],
    },
    colors: {
      primary: "#0B0D17",
      secondary: "#0B0D17",
      white: "#FFFFFF",
    },
    extend: {
      fontSize: {
        15: "0.9375rem",
        20: "1.25rem",
        28: "1.75rem",
        32: "2rem",
        40: "2.5rem",
        56: "3.5rem",
        80: "5rem",
        100: "6.25rem",
        150: "9.375rem",
      },
      letterSpacing: {
        4.75: "0.296875rem",
        2.7: "0.16875rem",
      },
    },
  },
  plugins: [],
};
export default config;
