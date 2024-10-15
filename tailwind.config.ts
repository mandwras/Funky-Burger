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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF6B6B",  // Example primary color
        secondary: "#4ECDC4", // Example secondary color
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Set Roboto as the default sans font
      },
    },
  },
  plugins: [],
};

export default config;
