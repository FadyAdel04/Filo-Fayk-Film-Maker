
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "0 0% 7%",  // Dark background
          light: "23 20% 89%", // Light background
        },
        foreground: {
          DEFAULT: "0 0% 98%", // Light text
          dark: "223 47% 20%", // Dark text
        },
        primary: {
          DEFAULT: "223 47% 20%", // Dark blue
          light: "23 20% 83%",    // Muted brown
          foreground: "0 0% 100%",
        },
        secondary: {
          DEFAULT: "23 20% 83%", // Muted brown
          foreground: "223 47% 20%", // Dark blue
        },
        muted: {
          DEFAULT: "223 47% 20%", // Dark blue
          foreground: "23 10% 90%", // Light beige
        },
        accent: {
          DEFAULT: "23 20% 83%", // Muted brown
          foreground: "223 47% 20%", // Dark blue
        },
        card: {
          DEFAULT: "0 0% 7%",     // Dark background
          foreground: "0 0% 98%",  // Light text
        },
        destructive: {
          DEFAULT: "0 84.2% 60.2%",
          foreground: "0 0% 98%",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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

