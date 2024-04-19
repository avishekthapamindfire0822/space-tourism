import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
      backgroundSize: {
        40: "2.5rem",
        48: "3rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        bellefair: ["var(--font-bellefair)"],
        barlow: ["var(--font-barlow)"],
      },
      fontSize: {
        "heading-1": "9.375rem",
        "heading-2": "6.25rem",
        "heading-3": "3.5rem",
        "heading-4": "2rem",
        "heading-5": ["1.75rem", { letterSpacing: "0.3rem" }],
        "subheading-1": "1.75rem",
        "subheading-2": [
          "0.875rem",
          {
            letterSpacing: "2.35px",
          },
        ],
        nav: [
          "1rem",
          {
            letterSpacing: "2.7px",
          },
        ],
        body: "1rem",
      },
      height: {
        0.5: "0.125rem",
        0.75: "0.1875rem",
        1.5: "0.375rem",
        37.5: "9.375rem",
        42.5: "10.625rem",
        75: "18.75rem",
      },
      width: {
        37.5: "9.375rem",
      },
      ringWidth: {
        36: "2.25rem",
      },
      spacing: {
        37.5: "9.375rem",
        42.5: "10.625rem",
        74.5: "18.75rem",
        60.5: "15.125rem",
      },
      letterSpacing: {
        4.75: "0.296875rem",
        2.7: "0.16875rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      margin: {
        21.5: "5.375rem",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      minWidth: {
        63.5: "15.875rem",
      },
      maxWidth: {
        63.5: "15.875rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
