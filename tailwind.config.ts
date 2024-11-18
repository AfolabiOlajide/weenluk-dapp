import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#1FC39E",
        ash: "#2B2B2B",
        yello: "#FAF2B1",
        blu: "#1EC49E",
        purp: "#F4E5F6",
        orang: "#FAF2B1",
        health: "#FEDEFF",
        nature: "#E3ACF9",
        tech: "#B9F3FC",
        dark: "#1c1c24",
        myPurple: "#8c6dfd"
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
