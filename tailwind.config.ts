import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-accent": "#D87D4A", // rgb(216, 125, 74)
        "orange-light": "#fbaf85", // rgb(251, 175, 133)
        "black-default": "#101010", // rgb(16, 16, 16)
        "white-default": "#FFFFFF", // rgb(255, 255, 255)
        "gray-light": "#F1F1F1", // rgb(241, 241, 241)
        "gray-lighter": "#FAFAFA", // rgb(250, 250, 250)
        "black-pure": "#000000", // rgb(0, 0, 0)
      },
      fontSize: {
        base: "15px",
        "3xl": "56px",
        "2xl": "40px",
        xl: "32px",
        lg: "24px",
        md: "18px",
        sm: "14px",
        xs: "13px",
      },
    },
  },
  plugins: [],
} satisfies Config
