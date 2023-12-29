import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3AAA35',
        'primary-light': '#7EB23D',
        'primary-dark': '#1E581C',
        'text-medium': '#153D13',
        'text-sub': '#264653',
        'light-dark-white': '#EBEBEB',
        'secondary': '#F4F5F5'
      },
      fontFamily: {
        'pt-sans': ['PT Sans', 'sans-serif'],
        'viga': ['Viga', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
