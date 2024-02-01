/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
         
        'primary': {
          '50': '#f0f7ff',
          '100': '#e1eefd',
          '200': '#bcddfb',
          '300': '#81c2f8',
          '400': '#3ea3f2',
          '500': '#1586e2',
          DEFAULT: '#0970cd',
          '700': '#08539c',
          '800': '#0b4881',
          '900': '#0f3d6b',
          '950': '#0a2747',
      },
      'secondary': {
        '50': '#eff8ff',
        '100': '#def1ff',
        '200': '#b6e4ff',
        '300': '#75d1ff',
        '400': '#2db9ff',
        DEFAULT: '#0198e9',
        '600': '#0080d3',
        '700': '#0065aa',
        '800': '#00568c',
        '900': '#064874',
        '950': '#042d4d',
    },
     backgroundPage: "#FAFAFA",
     backgroundNav: "#FBFBFB",
     bgSearch: "#F6F6F6",
     blackPrimary: "#333333",
     border: "#F1F1F1",
     lightText: "#29292E",
     fadeRed: "#FF5D5D",
     grayPlace: "#9B9B9B",
     grayPara: "#646464",
     grayText: "#394146",
     grayView: "#757575",
     grayBorder: "#E9E9E9",
     blackSec: "#383838",
     grayMenu:"#333333d9",
     imageBack: "#F2F2F2"


      },
      margin:{
        11.5: "45px",
        13:"50px"
      },
      padding:{
        11.5: "45px",
        13:"50px"
      },
       boxShadow:{
        "3xl": "0px 2px 8px 0px rgba(0, 0, 0, 0.08)"
       },
      fontFamily:{
        montserrat: "'Montserrat', 'sans-serif'",
        poppins: "'Poppins', 'sans-serif'"
      },
      fontSize: {
        heading1: "45px",
        heading2: "26px",
        heading28: "28px",
        heading3: "22px"
      },
    },
  },
  plugins: [],
};
