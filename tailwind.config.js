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
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          fontWeight: "600",
          display: "inline-block",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: "#44c767",
          color: "#ffffff",
          textDecoration: "none",
          textShadow: "0px -1px 7px #2f6627",
          "&:hover": {
            opacity: "0.8",
          },
        },
        ".btn-primary": {
          backgroundColor: "#ef4444",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#b91c1c",
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
