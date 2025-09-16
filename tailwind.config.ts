import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13111a", // $color-primary
        secondary: "#e4e1f6", // $color-secondary
        border: "#302c3f", // $border-color
        text: "#ffffff", // $text-color
        mainContrast: "#ff4980", // $main-contrast
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        gradientPrimary: "linear-gradient(270deg, #4f56ff, #ff4980)", // $gradient
      },
    },
  },
  plugins: [],
};
export default config;
