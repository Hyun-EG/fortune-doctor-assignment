/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "fortune-table-bg": "#F5F3EC",
        "fortune-table-border": "#2B557E",
        "fortune-table-title-text-color": "#424242",
        "table-card-red": "#C23030",
        "table-card-mint": "#18868C",
        "table-card-black": "#292929",
      },
      width: {
        "table-w": "21.9375rem",
        "table-inside-w": "20.9375rem",
        "table-element-card-w": "3.4375rem",
      },
      height: {
        "table-h": "38.8125rem",
        "table-element-card-h": "3.4375rem",
      },
      fontSize: {
        "card-xs": "0.488rem",
        "card-sm": "0.5rem",
        "card-semi-sm": "0.6rem",
        "card-xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
