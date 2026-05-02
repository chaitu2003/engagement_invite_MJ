import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFF9F2",
        champagne: "#F7E7CE",
        blush: "#E8B4A2",
        wine: "#7B2D3B",
        cocoa: "#2E211C",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(62, 38, 28, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
