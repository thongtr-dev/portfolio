import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Tech Blue
        secondary: "#0F172A", // Slate 900
        accent: "#06B6D4", // Cyan
        "background-light": "#F0F4F8", // Slightly cooler grey/blue tint
        "background-dark": "#0B1121", // Deep dark blue/black
        "surface-light": "#FFFFFF",
        "surface-dark": "#151F32", // Darker slate
        "text-light": "#334155", // Slate 700
        "text-dark": "#E2E8F0", // Slate 200
        "tech-border": "#2563EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
