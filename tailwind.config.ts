import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#D4C9BE",
        input: "#D4C9BE",
        ring: "#123458",
        background: {
          DEFAULT: "#F1EFEC",
          beige: "#D4C9BE",
          blue: "#123458",
          dark: "#030303",
        },
        foreground: {
          DEFAULT: "#030303",
          light: "#F1EFEC",
        },
        primary: {
          DEFAULT: "#123458",
          contrast: "#F1EFEC",
        },
        secondary: {
          DEFAULT: "#D4C9BE",
          foreground: "#123458",
        },
        muted: {
          DEFAULT: "#D4C9BE",
          foreground: "#123458",
        },
        accent: {
          DEFAULT: "#D4C9BE",
          foreground: "#123458",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#030303",
        },
        destructive: {
          DEFAULT: "#B00020",
          foreground: "#F1EFEC",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
