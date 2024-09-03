import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#163300",
        secondary: "#FFC091",
        "dark-subtle": "rgba(255, 255, 255, 0.5)",
        "light-subtle": "rgba(39, 39, 39, 0.5)",
        "highlight-dark": "#ffc220",
        "highlight-light": "#ffc220",
      }
    },
  },
  plugins: [],
};
export default config;
