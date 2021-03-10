const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,mdx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      body: defaultTheme.fontFamily.sans,
      serif: defaultTheme.fontFamily.serif,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      gray: colors.coolGray,
      green: {
        DEFAULT: "#77CB59",
        dark: "#38A333",
      },
      blue: {
        DEFAULT: "#00C1D6",
        dark: "#008394",
        darker: "#003F48",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: () => ({
        "hero-logo": "url('../images/ukc-logo-lg.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
