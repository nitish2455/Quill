/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue': '0 4px 6px -1px rgba(0, 0, 255, 0.1), 0 2px 4px -1px rgba(0, 0, 255, 0.06)',
      },
      color: {
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(217, 217, 217, 0.1)",
        }
      }
    },
    screens: {
      xxs: "370px",
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1360px",
      "2xl": "1440px",
      "3xl": "1536px",
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
}

