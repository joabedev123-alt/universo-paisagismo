import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF9F5",
        ink: "#0D1F16",
        muted: "#526B45",
        line: "rgba(82, 107, 69, 0.15)",
        forest: {
          DEFAULT: "#0D1F16",
          light: "#142D21",
        },
        olive: {
          DEFAULT: "#526B45",
          hover: "#0D1F16",
        },
        sage: {
          DEFAULT: "#8A9B7A",
          soft: "#F1F4EF",
          light: "#DDE5D8",
        },
        terracotta: {
          DEFAULT: "#B9683A",
          hover: "#C49A63",
          light: "#FDF5EE",
        },
        gold: {
          DEFAULT: "#C49A63",
          hover: "#B9683A",
          light: "#F9F4EC",
        },
        sand: "#D9C5A5",
        offwhite: "#F4F1E9",
        warmwhite: "#FAF9F5",
        graphite: "#242823",
        brand: {
          DEFAULT: "#526B45",
          hover: "#0D1F16",
        },
        accent: {
          DEFAULT: "#B9683A",
          soft: "#F1F4EF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
