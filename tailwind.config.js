/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e1eefd",
          200: "#bcddfb",
          300: "#81c2f8",
          400: "#3ea3f2",
          500: "#1586e2",
          DEFAULT: "#0970cd",
          700: "#08539c",
          800: "#0b4881",
          900: "#0f3d6b",
          950: "#0a2747",
        },
        secondary: {
          50: "#eff8ff",
          100: "#def1ff",
          200: "#b6e4ff",
          300: "#75d1ff",
          400: "#2db9ff",
          DEFAULT: "#0198e9",
          600: "#0080d3",
          700: "#0065aa",
          800: "#00568c",
          900: "#064874",
          950: "#042d4d",
        },
        backgroundPage: "#FAFAFA",
        backgroundNav: "#FBFBFB",
        bgSearch: "#F6F6F6",
        bgCart: "#EBF4F9",
        blueLogIn: "#2874F0",
        starRed: "#FF6565",
        bgProductDetails: "#FCFCFC",
        blackPrimary: "#333333",
        black: "#424241",
        black3D: "#3D3D3F",
        border: "#F1F1F1",
        borderButton: "#F2F2F5",
        borderAccount: "#ECECEC",
        borderSide: "#F4F4F4",
        borderSize: "#EAEAEA",
        borderFaq: "#D8D8D8",
        borderContact: "#E1E1E1",
        navBorder: "#EFEEEE",
        lightText: "#29292E",
        fadeRed: "#FF5D5D",
        grayPlace: "#9B9B9B",
        grayPara: "#646464",
        grayText: "#394146",
        grayBread: "#02344F",
        graRate: "#636363",
        grayTextSize: "#6E6E6F",
        grayView: "#757575",
        grayBorder: "#E9E9E9",
        grayPlusBg: "#EFEFEF",
        grayPlusText: "##ACACAC",
        grayBorderForm: "#D6D3D3",
        grayFaq: "#666666",
        grayBorderPage: "#E2E2E2",
        oldGray: "#A7A7A7",
        grayEdit: "#999999",
        grayForm: "#E3E3E3",
        grayDelete: "#A4A4A4",
        blackSec: "#383838",
        blackGray: "#4D4D4D",
        grayMenu: "#333333d9",
        imageBack: "#F2F2F2",
        checkBorder: "#D0D0D2",
        orangeStar: "#FFB340",
        grayPrice: "#BABABA",
        lineThrough: "#8D8D8D",
        accountBlack: "#414B56",
        textBody: "#808080",
        lightGrayBlue: "#F3F3F3",
        contactLabel: "#2E2E2E",
        indigoText: "#042847",
        linkEndBg: "#5D9DB1",
        twitterBg: "#53D1E2",
        facebookBg: "#4391DA",
        whatsBg: "#3AB137",
        shareBg: "#FF7020",
      },
      margin: {
        6.5: "26px",
        7.5: "30px",
        11.5: "45px",
        13: "50px",
        13.5: "52px",
        15: "60px",
        18: "70px",
        21: "90px",
      },
      padding: {
        6.5: "26px",
        7.5: "30px",
        11.5: "45px",
        13: "50px",
        13.5: "52px",
        15: "60px",
        18: "70px",
        21: "90px",
      },
      boxShadow: {
        "3xl": "0px 2px 8px 0px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        montserrat: "'Montserrat', 'sans-serif'",
        poppins: "'Poppins', 'sans-serif'",
        lato: "'Lato', 'sans-serif'",
        rajdhani: "'Rajdhani', 'sans-serif'",
        dmSans: "'DM Sans', 'sans-serif'",
      },
      fontSize: {
        heading1: "45px",
        heading30: "30px",
        heading42: "42px",
        heading36: "36px",
        heading56: "56px",
        heading2: "26px",
        heading27: "27px",
        heading28: "28px",
        heading3: "22px",
        paragraph1: "19px",
      },
    },
  },
  plugins: [],
};
