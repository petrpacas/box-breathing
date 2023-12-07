import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bgColorLight: {
          "0%, 100%": { backgroundColor: colors.indigo[600] },
          "50%": { backgroundColor: colors.indigo[700] },
        },
        bgColorDark: {
          "0%, 100%": { backgroundColor: colors.indigo[400] },
          "50%": { backgroundColor: colors.indigo[300] },
        },
      },
    },
    animation: {
      breatheLight: "bgColorLight 2s ease-in-out infinite",
      breatheDark: "bgColorDark 2s ease-in-out infinite",
    },
  },
  plugins: [],
};
export default config;
