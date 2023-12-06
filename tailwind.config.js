/** @type {import('tailwindcss').Config} */

const colors = {

  secondary: "var(--secondary)",

  primary: {
    DEFAULT:"var(--primary)",
    300: "var(--primary-300)",
  },
  black: {
    DEFAULT:"var(--black)",
    750: "var(--black-750)",
    450 :"var(--black-450)",
    200 :"var(--black-200)",
  },
  dark: {
    DEFAULT:"var(--dark)",
    100: "var(--dark-100)",
  },
  grey: {
    DEFAULT:"var(--grey)",
    100: "var(--grey-100)",
    200: "var(--grey-200)",
    300: "var(--grey-300)",
    400: "var(--grey-400)",
    500: "var(--grey-500)",
    600: "var(--grey-600)",
  },
  lite:{
    DEFAULT:"var(--box-shadow)"
  },

  white: {
    DEFAULT:"#fff",
    600: "var(--white-600)",
    700: "var(--white-700)",
  },
  transparent: "var(--transparent)",
};

const spacing = {
  // xs: "var(--space-xs)",
  sm: "var(--space-sm)",
  // md: "var(--space-md)",
  // lg: "var(--space-lg)",
  xl: "var(--space-xl)",
};

const borderRadius = {
  none:"0",
  sm: "var(--radius-sm)",
  // md: "var(--radius-md)",
  // lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  full: "50%",
};

const fontSize = {
  base: "1rem",
  sm: [
    "var(--text-sm)",
    {
      lineHeight: "1.5",
      letterSpacing: "-0.01em",
      fontWeight: "500",
    },
  ],
  md: "var(--text-md)",
  lg: "var(--text-lg)",
  xl: "var(--text-xl)",
  h1: "var(--text-h1)",
  h2: "var(--text-h2)",
  h3: "var(--text-h3)",
  h4: "var(--text-h4)",
  h5: "var(--text-h5)",
  h6: "var(--text-h6)",
};

const fontWeight = {
  regular: "400",
  bold: "700",
};

// const boxShadow = {
//   sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
//   lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)",
// };

const container = {
  center: true,
  padding: "calc(var(--js-gutter-x) * 0.5)",
};

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/utils/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    colors,
    fontSize,
    borderRadius,
    // boxShadow,
    container,
    screens: {
      xs: { max: "576px" },
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1420px",
      xxxl: "1600px",
      laptop: { min: "1200px", max: "1450px" },
    },
    extend: {
      fontWeight,
      spacing,
    },
  },
  plugins: [
   
  ],
};
