/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: colors.lime[500],
          darker: colors.lime[600],
          lighter: colors.lime[400],
        },
        highlight: {
          DEFAULT: colors.lime[100],
          darker: colors.lime[200],
          lighter: colors.lime[50],
        },
      },
    },
  },
  plugins: [],
}
