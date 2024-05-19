/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fca5a5",
          DEFAULT: "#ef4444",
          dark: "#b91c1c",
        },
        secondary: {
          light: "#fbbf24",
          DEFAULT: "#f59e0b",
          dark: "#b45309",
        },
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: "7px 31px",
          borderRadius: "28px ",
          fontWeight: "600",
          display: "inline-block",
          textAlign: "center",
          cursor: "pointer",
          // backgroundColor: "#rgb(249, 115, 22)",
          color: "#ffffff",
          textDecoration: "none",
          textShadow: "0px -1px 7px #2f6627",
          outline: "none",

          "&:hover": {
            opacity: "0.8",
          },
        },
        ".btn-primary": {
          backgroundColor: "#f97316",
          color: "#ffffff",
          "&:hover": {
            opacity: "0.8",
          },
        },
        ".btn-secondary": {
          backgroundColor: "#f59e0b",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#fbbf24",
          },
        },
      });
    },
  ],
};
