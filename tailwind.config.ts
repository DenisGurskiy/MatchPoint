import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primaryGreen100: "#66D36E",
        primaryGreen30: "#C2E6C0",
        primaryGreen10: "#ECFDF3",
        secondaryGreen: "#027A48",
        gray100Primary: "#0D0D0D",
        gray50: "#787984",
        divider: "#3B3B3F",
        gray20divider: "#DDDEE0",
        gray30Disabled: "#BBBCC1",
        gray10Background: "#EBEBEB",
        gray10Border: "#F4F4F5",
        systemRedError: "#C33433",
        systemGreenSuccess: "#13A14E",
        disabled: "#F4F4F5",
      },
      borderRadius: {
        full: "100px",
      },
      boxShadow: {
        'custom': '0px 1px 2px 1px #1018280D',
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
