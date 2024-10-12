import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        jump: "jump 1s ease-in-out infinite",
      },
      colors: {
        primary: "#FE9484",
        type1: "#7db374",
        type2: "#e7a137",
        type3: "#8fb1d7",
        type4: "#b4a8d6",
        percentage1: "#cfebed",
        percentage2: "#f3dbf5",
        percentage3: "#cee09e",
        percentage4: "#f3eab6",
      },
      lineHeight: {
        tight: "1.0",
      },
      fontSize: {
        "5xl": ["3rem", { lineHeight: "1.0" }],
      },
    },
  },
  plugins: [],
};
export default config;
