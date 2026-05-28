import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#27201b",
        paper: "#fffaf2",
        rosewood: "#8f2f2a",
        clay: "#b9684c",
        sage: "#63725f",
        mist: "#f4eee3"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(75, 46, 35, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
