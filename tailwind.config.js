/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        asha:["Poppins","sanserif"]
      },
      maxWidth:{
        container:"1170px"

      },
      colors:{
        nil:"#ffffff",
        reds: "#F40404",
        grd:"rgba(0,0,0,0.6)"

      },
      backgroundImage: {
        banner:"url(img/banner.jpg)",
        med:"url(img/med.png)",
        rit:"url(img/right.png)",
        lit:"url(img/left.png)",
        per:"url(img/per.png)",
        
      },

    },
  },
  plugins: [],
}

