import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      slate: colors.slate,
      violet: {
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
      },
      sky: {
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
      },
      red: {
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
      },
      black: "#020617",
      white: "#f8fafc",
      primary: "#0F172A",
      creme: "#E3E3E3",
      danger: "#dc2626",
      warning: "#facc15",
      info: "#0284c7",
      success: "#22c55e",
    },
    fontSize: {
      h1: [
        "48px",
        { lineHeight: "48px", letterSpacing: "-1.2em", fontWeight: "900" },
      ],
      h2: [
        "30px",
        { lineHeight: "36px", letterSpacing: "-0.75em", fontWeight: "600" },
      ],
      h3: [
        "24px",
        { lineHeight: "32px", letterSpacing: "-0.6em", fontWeight: "600" },
      ],
      h4: [
        "20px",
        { lineHeight: "28px", letterSpacing: "-0.5em", fontWeight: "600" },
      ],
      p: ["16px", { lineHeight: "28px", fontWeight: "400" }],
      lead: ["20px", { lineHeight: "28px", fontWeight: "400" }],
      sm: ["14px", { lineHeight: "14px" }],
      xs: ["12px", { lineHeight: "12px" }],
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
