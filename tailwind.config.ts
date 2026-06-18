import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        tag: {
          purple: "#5b2a7a",
          purpleDark: "#3f1959",
          navy: "#11136f",
          lime: "#0B176A",
          ink: "#16141b",
          muted: "#65616b",
          soft: "#f7f4f8",
          line: "#e7e1eb"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(22, 20, 27, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
