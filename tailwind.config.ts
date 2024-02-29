import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "green-300": "#deF7EC",
        "green-700": "#03543f",
        "gray-200": "#6b7280"
      },
      screens: {
        'xs': {'max': '639px'}, 
        'sm': {'max': '840px'}, 
        'md': {'max': '1023px'}, 
        'lg': {'max': '1279px'}, 
        'xl': {'max': '1535px'}, 
      },
    },
  },
  plugins: [],
};
export default config;
