import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-blue-600", "bg-red-600", "bg-green-600", "bg-yellow-600"],
  theme: {
    fontFamily: {
      "noto-sans-jp": ["var(--font-noto-sans-jp)", "sans-serif"],
    },
    colors: {
      white: {
        0: "#FFFFFF",
      },
      gray: {
        100: "#F1F2F4",
        300: "#E3E5E8",
        500: "#949DAD",
        900: "#232323",
      },
      red: {
        600: "#FA5A2E",
        700: "#E23F12",
      },
      blue: {
        500: "#0073E5",
        600: "#1466B8",
        700: "#115497",
      },
      green: {
        600: "#09A974",
        700: "#089164",
      },
      yellow: {
        600: "#F9A806",
        700: "#F49106",
      },
      pink: {
        600: "#FF7E7E",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        90: "22.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
