import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D87D4A',
          light: '#fbaf85',
        },
        dark: {
          DEFAULT: '#101010',
        },
        lightGray: {
          DEFAULT: '#F1F1F1',
          lighter: '#FAFAFA',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        black: {
          DEFAULT: '#000000',
        },
      },
      fontSize: {},
    },
  },
  plugins: [],
}
export default config
