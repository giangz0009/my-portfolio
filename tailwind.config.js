/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        themeStatus: {
          base: "var(--theme-status-text-main)",
          bolder: "var(--theme-status-text-bolder)",
          opacity: "var(--theme-status-text-opacity)",
        },
        theme: {
          base: "var(--theme-bg-main)",
        },
      },
      backgroundColor: {
        themeStatus: {
          base: "var(--theme-status-bg-main)",
          lighter: "var(--theme-status-bg-lighter)",
        },
      },
      fill: {
        themeStatus: {
          base: "var(--theme-status-text-main)",
        },
      },
    },
  },
  plugins: [],
};
