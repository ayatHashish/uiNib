/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    container: {
      center: true,
    },
    extend: {
      colors: {
        primary:"#115846",
        secondary:"#CC903F",
        gray:"#F7F7F7",
        gray3:"#515151",

      },
      borderRadius: {
          '12px': '0.75rem',
     
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
          backgroundColor: "#CC903F",
          color: "#ffffff",
        },
        ".btn-secondary": {
          backgroundColor: "#115846",
          color: "#ffffff",
          "&:hover": {
          opacity:"0.8"
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
          borderRadius: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          marginBottom: "20px", 
          position:"relative",
          overflow:"hidden",
          // height:"508px ",



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
              
              } ,
        },
 
        ".card-scale":{

         " &:hover":{
          transform: "scale(0.9)"

          }
        }

        ,
       ".news-overlay":{
          background: "rgba(0, 0, 0, 0.6)",
          transition: "background 0.3s ease",
        }
        
,
        ".partner-image":{
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
