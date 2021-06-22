module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Red Hat Display", "sans-serif"],
      },
      spacing: {
        '56px': "56px",
        62: "62px",
        78: "78px",
        115: "115px",
        118: "118.7px",
        128: "128px",
        '103px': '103px',
        '106px': '106px'
      },
      colors: {
        primarygreen: "#009F49",
        primarydark: "#121A26",
        pelpaygray: '#6B7280',
        pelpaygray100: '#697883',
        pelpayteal: '#F4FFF9',
        pelpayblack: '#181830',
        pelpayblack100: '#1D263A',
        pelpayblue: '#041A3E',
        pelpaygreen: '#20BFA9',
        pelpaylemongreen: '#eafde7'
      },
      lineHeight: {
        124: '124%',
        160: '160%',
        '76px': '76px',
        '27px': '27px',
        '38px': '38px',
        '48px': '48px',
        '56px': '56px',
        '65px': '65px'
      },
      letterSpacing: {
        "0.02em": "0.02em",
        "0.04em": "0.04em",
        "0.09": "-0.9px"
      },
      fontSize: {
        '42px': '42px',
        '64px': '64px',
        '288px': '28.8px'
      },
      maxWidth: {
        '250px': '250px',
        '300px': '300px',
        '34rem': '34rem'
      },
      boxShadow: {
        whitebutton: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'
      },
      borderRadius:{
        '31.3312px': '31.3312px',
        '30px': '30px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
