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
        },
        ".btn-secondary": {
          backgroundColor: "#f59e0b",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#fbbf24",
          },
        },
        ".btn-green": {
          backgroundColor: "green",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#fbbf24",
          },
        },
        ".nav-links":{
          fontSize: '0.875rem',    
          fontWeight: '600', 
          lineHeight: '1.5',
          textColor: '#1a202c', 
        } ,

        ".card ": {    
          backgroundColor: "#ffffff",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          marginBottom: "20px", 
          position:"relative",
          overflow:"hidden",
          height:"508px ",
          "&:hover": {
            ".news-details":  {
              opacity: "1",
              transform: "translateY(0)",
            }
            ,
           ".news-overlay" :{
              background: "rgba(0, 0, 0, 0.8)",
            }
          },
         ".news-details"  :{
            opacity: "0",
            transform: "translateY(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          
          }
        },

       ".news-overlay":{
          background: "rgba(0, 0, 0, 0.6)",
          transition: "background 0.3s ease",
        }
        
,
        ".Partner-image":{
          width: "16rem",
          height: "5rem",
        } ,
        ".img" :{
          width: "100%",
          height: "100%", 
      },
    });
    },
  ],
};
