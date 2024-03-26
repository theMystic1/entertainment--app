/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      josefinSans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#10141e",
        secondary: "#ffffff",
        tertiary: "#161d2f",
        accent: "#fc4747",
        gray: "#5a698f",
      },
      caretColor: (theme) => theme("colors"),
    },

    screens: {
      phone: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
