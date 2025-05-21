/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "fortune-table-bg": "#F5F3EC",
        "fortune-table-border": "#2B557E",
        "fortune-table-title-text-color": "#424242",
      },
      width: {
        "table-w": "21.9375rem",
        "table-inside-w": "20.9375rem",
      },
      height: {
        "table-h": "38.8125rem",
      },
    },
  },
  plugins: [],
};
